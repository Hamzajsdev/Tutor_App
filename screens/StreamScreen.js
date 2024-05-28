import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tec1 from '../assets/images/tec1.jpg';

export const sampleTutors = [
  {
    name: 'John Doe',
    qualifications: 'M.Sc. in Mathematics',
    subjects: ['Math', 'Physics'],
    availability: 'Mon-Fri 9:00 AM - 5:00 PM',
    rating: 4.5,
    reviews: ['Great tutor!', 'Very helpful and knowledgeable.'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjakdlwjqHkqRZ7MX0n6gGR5ZF5T2IHv1-A&s',
  },
  {
    name: 'Jane Smith',
    qualifications: 'Ph.D. in Computer Science',
    subjects: ['Computer Science', 'Programming'],
    availability: 'Sat-Sun 10:00 AM - 3:00 PM',
    rating: 4.8,
    reviews: ['Excellent teaching skills.', 'Highly recommended!'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrggIP1tphFNHqBURDu-6QY1TiSJVXQy0Uuw&s',
  },
];

 export const TutorCard = ({ tutor }) => {
  const imageSource = tutor.image.startsWith('http')
  ? { uri: tutor.image }
  : '';
  return (
    <View className="p-4 m-2  bg-white rounded-lg shadow">
      <Image source={imageSource} className="w-16 h-16 rounded-full" />
      <Text className="text-lg font-bold" >{tutor.name}</Text>
      <Text className="text-sm text-gray-600" >{tutor.qualifications}</Text>
      <Text className="text-sm" >Subjects: {tutor.subjects.join(', ')}</Text>
      <Text className="text-sm" >Availability: {tutor.availability}</Text>
      <Text className="text-sm" >Rating: {tutor.rating} ⭐</Text>
      <Text className="text-sm" >Reviews: {tutor.reviews.length}</Text>
    </View>
  );
};

export const TutorList = ({ tutors }) => {
  return (
    <ScrollView className="p-0">
      {tutors.map((tutor, index) => (
        <TutorCard key={index} tutor={tutor} />
      ))}
    </ScrollView>
  );
};

const StreamScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-bgWhite p-8 ">
      {/* <Text>Stream Screen</Text> */}
      <TutorList tutors={sampleTutors} />
    </SafeAreaView>
  );
};

export default StreamScreen;
