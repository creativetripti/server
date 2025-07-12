const port = process.env.PORT || 5000;
import axios from "axios";

const headers = {
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RpdmluZWFwaS5jb20vc2lnbnVwIiwiaWF0IjoxNzQ5NTQ5MTcwLCJuYmYiOjE3NDk1NDkxNzAsImp0aSI6InpIS2c0b2JFN2s1QUwwdWEiLCJzdWIiOiIzNzk4IiwicHJ2IjoiZTZlNjRiYjBiNjEyNmQ3M2M2Yjk3YWZjM2I0NjRkOTg1ZjQ2YzlkNyJ9.S5KQ5D-0YmnAvW3Hrx_sZfh9X-_1uK74-1hTRYPALxw",
};


export const apiData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };

    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v2/basic-astro-details",
      payload,
      { headers }
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const PlanetaryFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/planetary-positions",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const HoroScopeChartData = async (user) => {
  const CHART_IDS = [
    "D1",
    "MOON",
    "D9",
    "D7",
    "D12",
    "D16",
    "D20",
    "D24",
    "D30",
  ];
  const results = [];

  for (const chartId of CHART_IDS) {
    try {
      const [year, month, day] = user.dob.split("-").map(Number);
      const [hour, min, sec] = user.tob.split(":").map(Number);
      const payload = {
        api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
        full_name: user.name,
        day: day,
        month: month,
        year: year,
        hour: hour,
        min: min,
        sec: sec,
        gender: user.gender === "Male" ? 'male' : 'female',
        place: user.pob,
        lat: 24.4852,
        lon: 86.6948,
        tzone: 5.5,
        lan: user.lang,
      };
      const { data } = await axios.post(
        `https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/${chartId}`,
        payload,
        { headers }
      );
      results.push({
        chartId,
        data,
      });
    } catch (error) {
      console.error(
        `Failed for ${chartId}:`,
        error?.response?.data || error.message
      );
      results.push({
        chartId,
        error: error.message,
      });
    }
  }

  return results;
};

export const friendshipData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/composite-friendship",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const divisionalChartsData = async (user) => {
  const CHART_IDS = [
    "D1",
    "D2",
    "D3",
    "D7",
    "D9",
    "D10",
    "D12",
    "D16",
    "D20",
    "D24",
    "D27",
    "D30",
    "D40",
    "D45",
    "D60",
  ];
  const results = [];

  for (const chartId of CHART_IDS) {
    try {
      const [year, month, day] = user.dob.split("-").map(Number);
      const [hour, min, sec] = user.tob.split(":").map(Number);
      const payload = {
        api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
        full_name: user.name,
        day: day,
        month: month,
        year: year,
        hour: hour,
        min: min,
        sec: sec,
        gender: user.gender === "Male" ? 'male' : 'female',
        place: user.pob,
        lat: 24.4852,
        lon: 86.6948,
        tzone: 5.5,
        lan: user.lang,
      };
      const { data } = await axios.post(
        `https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/${chartId}`,
        payload,
        { headers }
      );
      results.push({
        chartId,
        data,
      });
    } catch (error) {
      console.error(
        `Failed for ${chartId}:`,
        error?.response?.data || error.message
      );
      results.push({
        chartId,
        error: error.message,
      });
    }
  }

  return results;
};

export const KP_PlanetaryDetailsFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/kp/planetary-positions",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const KP_HouseCuspsFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/kp/cuspal",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const JaiminiPlanetaryPositionsFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/jaimini-astrology/planetary-positions",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const JaiminiPadasFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response2 = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/jaimini-astrology/karakamsha-lagna",
      payload,
      { headers }
    );
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/jaimini-astrology/padas",
      payload,
      { headers }
    );

    return [response.data, response2.data];
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const JaiminiCharaDashaFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/jaimini-astrology/chara-dasha",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const YogasFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/yogas",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const AscendantReportFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v2/ascendant-report",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const BhavaKundliChartsFakeData = async (user) => {
  const CHART_IDS = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const results = [];

  for (const chartId of CHART_IDS) {
    try {
      const [year, month, day] = user.dob.split("-").map(Number);
      const [hour, min, sec] = user.tob.split(":").map(Number);
      const payload = {
        api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
        full_name: user.name,
        day: day,
        month: month,
        year: year,
        hour: hour,
        min: min,
        sec: sec,
        gender: user.gender === "Male" ? 'male' : 'female',
        place: user.pob,
        lat: 24.4852,
        lon: 86.6948,
        tzone: 5.5,
        lan: user.lang,
      };
      const { data } = await axios.post(
        `https://astroapi-3.divineapi.com/indian-api/v1/bhava-kundli/${chartId}`,
        payload,
        { headers }
      );
      results.push({
        chartId,
        data,
      });
    } catch (error) {
      console.error(
        `Failed for ${chartId}:`,
        error?.response?.data || error.message
      );
      results.push({
        chartId,
        error: error.message,
      });
    }
  }

  return results;
};

export const ShadbalaFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v2/shadbala",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const YoginiDashaFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v2/yogini-dasha",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const SadhesatiAnalysisFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v2/sadhe-sati",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const VimshottariDashaFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/vimshottari-dasha",
      { ...payload, dasha_type: "antar-dasha" },
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const KalsarpaDoshaFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/kaal-sarpa-yoga",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const ManglikAnalysisFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v2/manglik-dosha",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const SudarshanaChakraFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/sudarshana-chakra",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const UpagrahaFakeData = {
  introduction:
    "In astrology, Upagrahas, or sub-planets, are computed to correspond with each main planet. The calculation of sub-planets for the Moon, Venus, Mars, Rahu, and Ketu is determined based on the longitude of the Sun.",
  dhumadiGroup: {
    heading: "Dhumadi Group of Sub-Planets",
    paragraph1:
      "Dhumadi Group of Sub-Planets involves the computation of sub-planets associated with the Sun, Mercury, Jupiter, Saturn, and an additional sub-planet of Mars. This calculation is rooted in dividing day or night into eight equal parts. The initial part is attributed to the lord of the day, followed by the remaining lords of the week in cyclic order. The eighth part is lordless. For nighttime births, the first seven of the eight equal parts are assigned to the lords of the planets starting from the 5th weekday.",
    paragraph2:
      "There are two prevalent methods for determining the longitude. In the first approach, an ascendant is calculated for the commencement of the period governed by the planet. In the second method, the end of the period is considered. For Gulika, the sub-planet of Saturn, a third method exists to compute the longitude of the Dhumadi group of sub-planets, relying on fixed values of rise time. This calculated value, termed MAANDI in Astro-Vision Horoscope, is presented alongside the principal planets in the Rasi Chart.",
  },
  table: [
    // Keep this as 'table' for the original Upagraha section
    {
      Planet: "Mars",
      Upagraha: "Dhama",
      "Method of Calculation": "Longitude of Sun + 133 Deg. 20 Min.",
    },
    {
      Planet: "Rahu",
      Upagraha: "Vyatipata",
      "Method of Calculation": "360 - Dhuma",
    },
    {
      Planet: "Moon",
      Upagraha: "Parivesh",
      "Method of Calculation": "180 + Vyatipata",
    },
    {
      Planet: "Venus",
      Upagraha: "Indrachapa",
      "Method of Calculation": "360 - Parivesh",
    },
    {
      Planet: "Ketu",
      Upagraha: "Upaketu",
      "Method of Calculation": "Indrachapa + 16 Deg. 40 Min",
    },
  ],
};

export const GulikadiGroupFakeData = {
  heading: "Gulikadi group",
  paragraph1:
    "The Gulikadi Group of Sub-Planets is a significant aspect in astrology, particularly associated with the sub-planet Gulika, which is linked to the planet Saturn. This group plays a unique role in determining certain astrological aspects. The calculation of the Gulikadi group involves considering fixed values of rise time. These values are employed to find the longitude of the sub-planets within the group, contributing to the comprehensive understanding of an individual's astrological profile. The results, often presented as the MAANDI in an Astro-Vision Horoscope, are integrated into the Rasi Chart alongside the principal planets, providing a more nuanced and detailed perspective on the celestial influences at the time of an individual's birth.",
  paragraph2:
    "In astrology, Gulika is believed to have its own distinct impact on an individual's life, influencing various aspects such as career, relationships, and overall well-being. Astrologers use the Gulikadi Group's calculations to provide insights into specific planetary positions and their potential influences. This adds a layer of depth to astrological analyses, allowing for a more comprehensive interpretation of an individual's birth chart and facilitating a more nuanced understanding of the celestial forces shaping their destiny.",
  table: [
    { Planet: "Sun", Upagraha: "Kala" },
    { Planet: "Mercury", Upagraha: "Ardhaprahara" },
    { Planet: "Mars", Upagraha: "Mrityu" },
    { Planet: "Jupiter", Upagraha: "Yamakantaka" },
    { Planet: "Saturn", Upagraha: "Gulika" },
  ],
};

export const UpagrahaLongitudeFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/sub-planet-positions",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const UpagrahaNakshatraSubLordFakeData = {
  heading: "Upagraha/Nakshatra/Sub Lord",
  table: [
    {
      Upagraha: "Dhuma",
      Nakshatra: "Purva Ashada",
      "Nakshatra Lord": "Venus",
      "Sub Lord": "Rahu",
      "Sub Sub Lord": "Mars",
    },
    {
      Upagraha: "Vyatripata",
      Nakshatra: "Pushya",
      "Nakshatra Lord": "Saturn",
      "Sub Lord": "Venus",
      "Sub Sub Lord": "Mercury",
    },
    {
      Upagraha: "Parivesh",
      Nakshatra: "Uttara Ashada",
      "Nakshatra Lord": "Sun",
      "Sub Lord": "Venus",
      "Sub Sub Lord": "Ketu",
    },
    {
      Upagraha: "Indrachapa",
      Nakshatra: "Punarvasu",
      "Nakshatra Lord": "Jupiter",
      "Sub Lord": "Jupiter",
      "Sub Sub Lord": "Jupiter",
    },
    {
      Upagraha: "Upaketu",
      Nakshatra: "Pushya",
      "Nakshatra Lord": "Saturn",
      "Sub Lord": "Mercury",
      "Sub Sub Lord": "Rahu",
    },
    {
      Upagraha: "Gulika",
      Nakshatra: "Hasta",
      "Nakshatra Lord": "Moon",
      "Sub Lord": "Mercury",
      "Sub Sub Lord": "Mercury",
    },
    {
      Upagraha: "Yamaghantaka",
      Nakshatra: "Uttara Ashada",
      "Nakshatra Lord": "Sun",
      "Sub Lord": "Ketu",
      "Sub Sub Lord": "Jupiter",
    },
    {
      Upagraha: "Kaala",
      Nakshatra: "Swati",
      "Nakshatra Lord": "Rahu",
      "Sub Lord": "Jupiter",
      "Sub Sub Lord": "Saturn",
    },
    {
      Upagraha: "Mrityu",
      Nakshatra: "Jyeshtha",
      "Nakshatra Lord": "Mercury",
      "Sub Lord": "Venus",
      "Sub Sub Lord": "Jupiter",
    },
    {
      Upagraha: "Ardhaprahara",
      Nakshatra: "Moola",
      "Nakshatra Lord": "Ketu",
      "Sub Lord": "Mercury",
      "Sub Sub Lord": "Rahu",
    },
  ],
  chartImage: `http://localhost:${port}/images/pdf-assets/chart.png`, // This is the placeholder image.
};

export const AshtakvargaFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/bhinnashtakvarga/ashtakvarga",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const SarvashtakvargaChartsData = async (user) => {
  const CHART_IDS = ["D1", "D2", "D3", "D7", "D12", "D16", "D20", "D24", "D30"];
  const results = [];

  for (const chartId of CHART_IDS) {
    try {
      const [year, month, day] = user.dob.split("-").map(Number);
      const [hour, min, sec] = user.tob.split(":").map(Number);
      const payload = {
        api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
        full_name: user.name,
        day: day,
        month: month,
        year: year,
        hour: hour,
        min: min,
        sec: sec,
        gender: user.gender === "Male" ? 'male' : 'female',
        place: user.pob,
        lat: 24.4852,
        lon: 86.6948,
        tzone: 5.5,
        lan: user.lang,
      };
      const { data } = await axios.post(
        `https://astroapi-3.divineapi.com/indian-api/v1/bhinnashtakvarga/sarvashtakavarga/${chartId}`,
        payload,
        { headers }
      );
      results.push({
        chartId,
        data,
      });
    } catch (error) {
      console.error(
        `Failed for ${chartId}:`,
        error?.response?.data || error.message
      );
      results.push({
        chartId,
        error: error.message,
      });
    }
  }

  return results;
};

export const PrastharaChakraFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v1/bhinnashtakvarga/prasthara-chakra",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};

export const PlanetAnalysisFakeData = async (user) => {
  const CHART_IDS = [
    "sun",
    "moon",
    "mars",
    "mercury",
    "venus",
    "saturn",
    "jupiter",
    "ketu",
    "rahu",
  ];
  const results = [];

  for (const chartId of CHART_IDS) {
    try {
      const [year, month, day] = user.dob.split("-").map(Number);
      const [hour, min, sec] = user.tob.split(":").map(Number);
      const payload = {
        api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
        full_name: user.name,
        day: day,
        month: month,
        year: year,
        hour: hour,
        min: min,
        sec: sec,
        gender: user.gender === "Male" ? 'male' : 'female',
        place: user.pob,
        lat: 24.4852,
        lon: 86.6948,
        tzone: 5.5,
        lan: user.lang,
      };
      const { data } = await axios.post(
        `https://astroapi-3.divineapi.com/indian-api/v1/planet-analysis`,
        { ...payload, analysis_planet: chartId },
        { headers }
      );
      results.push(data);
    } catch (error) {
      console.error(
        `❌ Failed for ${chartId}:`,
        error?.response?.data || error.message
      );
      results.push({
        chartId,
        error: error.message,
      });
    }
  }

  return results;
};

export const GemstoneSuggestionsFakeData = async (user) => {
  try {
    const [year, month, day] = user.dob.split("-").map(Number);
    const [hour, min, sec] = user.tob.split(":").map(Number);
    const payload = {
      api_key: "12806ec375b3fbeff0915e5ee1a7d10b",
      full_name: user.name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: user.gender === "Male" ? 'male' : 'female',
      place: user.pob,
      lat: 24.4852,
      lon: 86.6948,
      tzone: 5.5,
      lan: user.lang,
    };
    const response = await axios.post(
      "https://astroapi-3.divineapi.com/indian-api/v2/gemstone-suggestion",
      payload,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return { success: 0, error: error.message };
  }
};
