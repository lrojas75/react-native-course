import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite, removeFavorite } from "../store/redux/favorites";
import List from "../components/MealDetail/List";
import { /* useContext, */ useLayoutEffect } from "react";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";

import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";
// Using Redux

const MealDetailScreen = ({ route, navigation }) => {
  // const favoriteMealsCtx = useContext(FavoritesContext); -- For use with Context instead of Redux.
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids); // Used to get data from the Redux store.
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId); -- For use with Context instead pf Redux.
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoritesStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
      // favoriteMealsCtx.removeFavorite(mealId); -- For use with Context instead pf Redux.
    } else {
      dispatch(addFavorite({ id: mealId }));
      // favoriteMealsCtx.addFavorite(mealId); -- For use with Context instead pf Redux.
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        // return <Button title={"Tap me"} onPress={changeFavoritesStatusHandler} />;
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoritesStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoritesStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
