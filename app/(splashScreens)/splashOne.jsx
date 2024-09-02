import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SplashScreen = () => {
    return (
        <View className="flex-1 items-center justify-center bg-gray-100">
            <Image
                source={{ uri :'https://www.canva.com/logos/templates/hospital/'}}
                className="w-40 h-40 mb-8"
            />
            <Text className="text-2xl font-bold text-gray-800 mb-4">
                Book Your Nearest Hospitals Doctor On Your Time
            </Text>
            <Link href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-full">
                Register
            </Link>
            <Text className="text-gray-600 mt-4">
                already have an account <Link href="/login" className="text-green-600">Login</Link>
            </Text>
        </View>
    )
}

export default SplashScreen