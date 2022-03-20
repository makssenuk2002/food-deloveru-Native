import * as Font from 'expo-font'
export async function bootstrap() {
  try {
    await Font.loadAsync({
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      
    })
    console.log('Database started...')
  } catch (e) {
    console.log('Error: ', e)
  }
}
