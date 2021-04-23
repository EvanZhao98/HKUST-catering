interface FoodService {
    addFood(food_name: string, price: number, type: string, description: string, destination: string, path: string, filename: string): Promise<boolean>

    updateFood(food_name: string, price: number, type: string, food_id: string): Promise<boolean>

    addFoodToMenu(food_id: string, number: number, date: number): Promise<boolean>
}

export default FoodService