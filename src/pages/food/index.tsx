import { Food } from './Food.interface';
import useFood from './useFood';

const FoodPage = () => {
  const { data, isLoading, handleRedirect } = useFood();

  return (
    <div>
      Food list page
      {isLoading ? (
        <p>loading</p>
      ) : (
        <ul>
          {data.map((item: Food) => {
            return (
              <li onClick={() => handleRedirect(`/food/${item.id}`)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FoodPage;
