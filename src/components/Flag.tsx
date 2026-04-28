export type FlagProps = {
  country: {
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    alpha2Code: string;
    capital: string;
    topLevelDomain: string[];
    currencies: {
      code: string;
      name: string;
      symbol: string;
    }[];
    languages: {
      iso639_1: string;
      name: string;
      nativeName: string;
    }[];
    flags: {
      svg: string;
      png: string;
    };
    borders: string[];
  };
};

const Flag = ({ country }: FlagProps) => {
  return (
    <div className="flag">
        <img src={country.flags.svg} alt={country.name} />
        <h2>{country.name}</h2>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
    </div>
  )
}

export default Flag