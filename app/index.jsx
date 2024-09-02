import { Link, router } from 'expo-router'
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'

const Home = () => {
    return (
        <View className='flex-1 bg-secondary'>
            {/* Header */}
            <View className='bg-primary p-4 rounded-b-lg'>
                <View className='flex-row justify-between items-center mt-7'>
                    <TouchableOpacity>
                        {/* Menu Icon (Replace with actual icon) */}
                        <Text className='text-white text-2xl'>☰</Text>
                    </TouchableOpacity>
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zxd1-dLr3G1zNoKoDOaHDtFSTYpRT-f6LA&s' }} // Replace with actual profile image URL
                        className='w-10 h-10 rounded-full'
                    />
                </View>
                <Text className='text-white text-lg mt-4'>Welcome Back</Text>
                <Text className='text-white text-2xl font-bold'>Let's find your top doctor!</Text>
                <View className='bg-white p-2 rounded-full mt-4'>
                    <TextInput
                        placeholder="Search health issue..."
                        className='text-lg px-4'
                    />
                </View>
            </View>

            {/* Categories */}
            <View className='px-4 mt-4 '>
                <Text className='text-xl font-bold'>Categories</Text>

                {/* Category Icons (Replace with actual icons) */}
                <View className='flex-row justify-between mt-2'>
                    <View className='mr-4 items-center'>
                        <View className='w-12 h-12 bg-primary rounded-full items-center justify-center'>
                            <Text className='text-white text-xl'>🌟</Text>
                        </View>
                        <Text>All</Text>
                    </View>
                    <View className='mr-4 items-center'>
                        <View className='w-12 h-12 bg-primary rounded-full items-center justify-center'>
                            <Text className='text-white text-xl'>❤️</Text>
                        </View>
                        <Text>Cardiology</Text>
                    </View>
                    <View className='mr-4 items-center'>
                        <View className='w-12 h-12 bg-primary rounded-full items-center justify-center'>
                            <Text className='text-white text-xl'>💊</Text>
                        </View>
                        <Text>Medicine</Text>
                    </View>
                    <View className='mr-4 items-center'>
                        <View className='w-12 h-12 bg-primary rounded-full items-center justify-center'>
                            <Text className='text-white text-xl'>⚕️</Text>
                        </View>
                        <Text>General</Text>
                    </View>
                </View>
            </View>

            {/* Doctor List */}
            <ScrollView className='px-4 mt-4'>
                {/* Doctor Card */}
                <View className='bg-white p-4 rounded-lg mb-4'>
                    <View className='flex-row items-center'>
                        <Image
                            source={{ uri: 'data:image/jpeg;base64,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' }} // Replace with actual image URL
                            className='w-16 h-16 rounded-full'
                        />
                        <View className='ml-4'>
                            <Text className='text-lg font-bold'>Dr. Maria Waston</Text>
                            <Text>Heart Surgeon, London, England</Text>
                            <View className='flex-row items-center mt-1'>
                                <Text className='text-primary text-lg'>⭐ 4.8</Text>
                                <TouchableOpacity className='bg-primary ml-4 p-2 rounded-full'>
                                    <Text className='text-white'><Link href="/appointment">Appointment</Link></Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Repeat similar blocks for other doctors */}
                <View className='bg-white p-4 rounded-lg mb-4'>
                    <View className='flex-row items-center'>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxv-aOP1Kg25NKYqPdJj3hx0jmJEydfAGYCaLywnW6kiyFkrYsockTqIZOArz2v9SRuY&usqp=CAU' }} // Replace with actual image URL
                            className='w-16 h-16 rounded-full'
                        />
                        <View className='ml-4'>
                            <Text className='text-lg font-bold'>Dr. Stevi Jessi</Text>
                            <Text>General Dentist</Text>
                            <View className='flex-row items-center mt-1'>
                                <Text className='text-primary text-lg'>⭐ 4.5</Text>
                                <TouchableOpacity className='bg-primary ml-4 p-2 rounded-full'>
                                    <Text className='text-white'><Link href="/appointment">Appointment</Link></Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity onPress={() => router.push("/doctors")} className="mx-4 my-2 p-4 bg-primary rounded-full items-center">
               <Text className="text-white">View All</Text>
            </TouchableOpacity>
    

            {/* Bottom Navigation */}
            <View className='flex-row justify-around bg-white p-4'>
                <TouchableOpacity>
                    <Text className='text-primary text-2xl'>🏠</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className='text-gray-400 text-2xl'>📅</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className='text-gray-400 text-2xl'>💬</Text>
                </TouchableOpacity>
                <TouchableOpacity className='bg-primary p-2 rounded-full'>
                    <Text className='text-white text-2xl'>➕</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home