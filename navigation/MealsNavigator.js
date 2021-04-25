import { createStackNavigator, createAppContainer } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMealsScreen: {
        screen: CategoryMealsScreen
    },
    Mealdetail: MealDetailScreen
});

export default createAppContainer ( MealsNavigator );