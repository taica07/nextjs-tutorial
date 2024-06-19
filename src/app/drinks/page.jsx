import DrinksList from '@/components/DrinksList';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  const drinksList = await fetchDrinks();
  console.log(drinksList);

  return (
    <div>
      <h1 className="text-7xl">Drinks Page</h1>
      <DrinksList drinksList={drinksList.drinks} />
    </div>
  );
};

export default DrinksPage;
