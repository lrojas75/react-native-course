import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

// Route prop contains the params object sent via the navigation function's second parameter.
function MealsOverviewScreen({ route, navigation }) {
  /* 
    Alternative with a hook to grab params in a component not registered in the Screens.
    const route = useRoute();
    route.params
  */
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );
  // useLayoutEffect runs in parallel with the root (MealsOverviewScreen) function on init unlike useEffect which runs after the root function is done running.
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

const styles = StyleSheet.create({});

export default MealsOverviewScreen;
