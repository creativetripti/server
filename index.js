import express from "express";
import puppeteer from "puppeteer";
import cors from "cors";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import {
  apiData,
  PlanetaryFakeData,
  HoroScopeChartData,
  friendshipData,
  divisionalChartsData,
  KP_PlanetaryDetailsFakeData,
  KP_HouseCuspsFakeData,
  JaiminiPlanetaryPositionsFakeData,
  JaiminiPadasFakeData,
  JaiminiCharaDashaFakeData,
  AscendantReportFakeData,
  YogasFakeData,
  BhavaKundliChartsFakeData,
  SadhesatiAnalysisFakeData,
  VimshottariDashaFakeData,
  ShadbalaFakeData,
  YoginiDashaFakeData,
  KalsarpaDoshaFakeData,
  ManglikAnalysisFakeData,
  SudarshanaChakraFakeData,
  UpagrahaFakeData,
  GulikadiGroupFakeData,
  UpagrahaLongitudeFakeData,
  UpagrahaNakshatraSubLordFakeData,
  AshtakvargaFakeData,
  SarvashtakvargaChartsData,
  PrastharaChakraFakeData,
  PlanetAnalysisFakeData,
  GemstoneSuggestionsFakeData,
} from "./FakeData/FakeData.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "assets")));

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend origin
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());



// Route to generate the full Kundali PDF (multi-page)
app.post("/generate-kundali-pdf", async (req, res) => {
  const { customer, language } = req.body; // Destructure language from the request body
  if (!customer) {
    return res.status(400).send("Customer data is required.");
  }
  if (!language) {
    return res.status(400).send("Language is required (english or hindi).");
  }

  function transformPrastharaChakra(rawData) {
  const tables = [];

  const convertSection = (title, sectionData) => {
    const signs = Object.keys(sectionData?.Sun || {});
    const headers = ['Sign', ...signs];
    Object.entries(sectionData).forEach(([planet, values]) => {
      const row = { Sign: planet, ...values };
      if (tables.find(t => t.title === title)) {
        tables.find(t => t.title === title).rows.push(row);
      } else {
        tables.push({ title, headers, rows: [row] });
      }
    });
  };

  if (rawData?.data?.trinona_reduction) {
    convertSection("Trinona Reduction", rawData.data.trinona_reduction);
  }

  if (rawData?.data?.ekadhipatya_reductions) {
    convertSection("Ekadhipatya Reduction", rawData.data.ekadhipatya_reductions);
  }

  if (rawData?.data?.shodaya_pinda) {
    const pinda = rawData.data.shodaya_pinda;
    const headers = ['Sign', ...Object.keys(pinda.rashi_pinda)];
    const rows = [
      { Sign: 'Rashi Pinda', ...pinda.rashi_pinda },
      { Sign: 'Graha Pinda', ...pinda.graha_pinda },
      { Sign: 'Total', ...pinda.total }
    ];
    tables.push({ title: 'Shodaya Pinda', headers, rows });
  }

  return { tables };
}


  try {
    // ✅ Await the data before use
    const kundaliData = await apiData(customer);
    const Planetary = await PlanetaryFakeData(customer);
    const HoroScopeChart = await HoroScopeChartData(customer);
    const friendship = await friendshipData(customer);
    const divisionalCharts = await divisionalChartsData(customer);
    const KP_PlanetaryDetails = await KP_PlanetaryDetailsFakeData(customer);
    const KP_HouseCusps = await KP_HouseCuspsFakeData(customer);
    const JaiminiPlanetaryPositions = await JaiminiPlanetaryPositionsFakeData(customer);
    const JaiminiPadas = await JaiminiPadasFakeData(customer);
    const JaiminiCharaDasha = await JaiminiCharaDashaFakeData(customer);
    const Yogas = await YogasFakeData(customer);
    const AscendantReport = await AscendantReportFakeData(customer);
    const shadbalaData = await ShadbalaFakeData(customer);
    const yoginiDasha = await YoginiDashaFakeData(customer);
    const BhavaKundliCharts = await BhavaKundliChartsFakeData(customer);
    const sadesati = await SadhesatiAnalysisFakeData(customer);
    const vimshottariDasha = await VimshottariDashaFakeData(customer);
    const kalsarpaData = await KalsarpaDoshaFakeData(customer);
    const manglikData = await ManglikAnalysisFakeData(customer);
    const sudarshanaChakraData = await SudarshanaChakraFakeData(customer);
    const upagrahaLongitudeData = await UpagrahaLongitudeFakeData(customer);
    const ashtakvargaData = await AshtakvargaFakeData(customer);
    const allSarvashtakvargaCharts = await SarvashtakvargaChartsData(customer);
    const rawPrastharaChakraData = await PrastharaChakraFakeData(customer);
    const prastharaChakraData = transformPrastharaChakra(rawPrastharaChakraData);
    const planetAnalysisData = await PlanetAnalysisFakeData(customer);
    const gemstoneSuggestionsData = await GemstoneSuggestionsFakeData(customer);

    const templateData = {
      customer: customer,
      kundaliData: kundaliData,
      Planetary: Planetary,
      HoroScopeChart : HoroScopeChart,
      divisionalCharts: divisionalCharts,
      friendship: friendship,
      KP_PlanetaryDetails: KP_PlanetaryDetails,
      KP_HouseCusps: KP_HouseCusps,
      JaiminiPlanetaryPositions: JaiminiPlanetaryPositions,
      JaiminiPadas: JaiminiPadas,
      JaiminiCharaDasha: JaiminiCharaDasha,
      Yogas: Yogas,
      AscendantReport: AscendantReport,
      BhavaKundliCharts: BhavaKundliCharts,
      sadesati: sadesati,
      sadesatiRemedies: sadesati,
      vimshottariDasha: vimshottariDasha,
      shadbalaData: shadbalaData,
      yoginiDasha: yoginiDasha,
      sadhesatiLifeAnalysis: sadesati,
      kalsarpaData: kalsarpaData,
      manglikData: manglikData,
      sudarshanaChakraData: sudarshanaChakraData,
      upagrahaData: UpagrahaFakeData,
      gulikadiData: GulikadiGroupFakeData,
      upagrahaLongitudeData: upagrahaLongitudeData,
      upagrahaNakshatraSubLordData: upagrahaLongitudeData,
      ashtakvargaData: ashtakvargaData,
      allSarvashtakvargaCharts: allSarvashtakvargaCharts,
      prastharaChakraData: prastharaChakraData,
      planetAnalysisData: planetAnalysisData,
      gemstoneSuggestionsData: gemstoneSuggestionsData,
      port: port,
    }; 
 
    // Determine which EJS template to render based on the language
    const templateFileName = "kundali-report.ejs"
    const htmlContent = await ejs.renderFile(
      path.join(__dirname, "views", templateFileName),
      templateData
    );

    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    await page.setContent(htmlContent, {
      waitUntil: "networkidle0",
    });

    await page.emulateMediaType("print");

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
    });

    await browser.close();

    const filename = `${customer.name.replace(
      /\s/g,
      "_"
    )}_kundali_${language}.pdf`;
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  }
});

// Simple GET route for easy testing (uses fixed customer data)
app.get("/test-pdf", async (req, res) => {
  const testCustomer = {
    name: "Test User",
    dob: "23/08/1985",
    tob: "18:15",
    pob: "New Delhi, India",
  };

  try {
    const templateData = {
      customer: testCustomer,
      kundaliData: apiData.data,
      Planetary: PlanetaryFakeData,
      port: port,
    };

    // Default to English for the test PDF
    const htmlContent = await ejs.renderFile(
      path.join(__dirname, "views", "kundali-report.ejs"),
      templateData
    );

    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    await page.setContent(htmlContent, {
      waitUntil: "networkidle0",
    });

    await page.emulateMediaType("print");

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
    });

    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${testCustomer.name.replace(
        /\s/g,
        "_"
      )}_kundali_test_english.pdf`
    );
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating test PDF:", error);
    res.status(500).send("Error generating test PDF");
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
  console.log(
    `Open http://localhost:${port}/test-pdf to generate the full Kundali PDF`
  );
});
