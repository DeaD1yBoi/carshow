import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filter: FilterProps) {
  const { manufacturer, year, fuel, limit, model } = filter;

  const headers = {
    "X-RapidAPI-Key": "362b1bf26fmsh7b2903e3eaeb0f6p1f16eajsn8ff3798dcf9a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  );
  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 30;
  const milageFactor = 0.855555555;
  const ageFactor = 30;
  const milageRate = city_mpg / milageFactor;
  const yearsOfCar =
    new Date().getFullYear() === year ? 1 : new Date().getFullYear() - year;
  const ageRate = (1 / yearsOfCar) * ageFactor;
  const rentalRatePerDay = basePricePerDay + milageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
