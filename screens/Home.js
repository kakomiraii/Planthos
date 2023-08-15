import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

import { icons, images, COLOURS, SIZES, FONTS } from '../constants';
 
const Home = () => {

    // test data
    const [newPlants, setNewPlants] = React.useState([
        {
            id: 0,
            name: "Plant 1",
            img: images.plantOne,
            favourite: false 
        },
        {
            id: 1,
            name: "Plant 2",
            img: images.plantTwo,
            favourite: true 
        },
        {
            id: 2,
            name: "Plant 3",
            img: images.plantThree,
            favourite: true
        },
        {
            id: 3,
            name: "Plant 4",
            img: images.plantFour,
            favourite: false
        }
    ])

    const [friendList, setFriendList] = React.useState([
        {
            id: 0,
            img: images.profileOne
        },
        {
            id: 1,
            img: images.profileTwo
        },
        {
            id: 2,
            img: images.profileThree
        },
        {
            id: 3,
            img: images.profileFour
        },
        {
            id: 4,
            img: images.profileFive
        }
    ])
 
    // rendering

    function renderNewPlants(item, index) {
        return(
            <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base }}>
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.23,
                        height: "82%",
                        borderRadius: 15
                    }}
                />

                <View
                    style={{
                        position: "absolute",
                    }}
                >
                    <Text style={{ color: COLOURS.white, ...FONTS.body4, fontWeight: "bold" }}>{item.name}</Text>
                </View>

                <TouchableOpacity
                    style={{
                        position: "absolute",
                        top: "15%",
                        left: 7,
                    }}
                    onPress={() => { console.log("Favourite On Pressed") }}
                >
                    <Image
                        source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20
                            }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderFriendsComponent() {
        if(friendList.length == 0) {
            return (
                <View></View>
            )
        } else if(friendList.length <= 3) {
            return(
                friendList.map((item, index) => (
                    <View
                        key={`friend-${index}`}
                        style={index == 0 ? {} : { marginLeft: -20 }}
                    >
                        <Image 
                            source={item.img}
                            resizeMode="cover"
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                borderWidth: 3,
                                borderColor: COLOURS.primary
                            }}  
                        />
                    </View>
                ))
            )
        } else {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}> 
                    {friendList.map((item, index) => {
                        if(index <= 2) {
                            return (
                                <View
                                    key={`friend-${index}`}
                                    style={index == 0 ? {} : { marginLeft: -20 }}
                                >
                                    <Image
                                        source={item.img}
                                        resizeMode="cover"
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25,
                                            borderWidth: 3,
                                            borderColor: COLOURS.primary
                                        }}
                                    />
                                </View>
                            )
                        }
                    })}

                    <Text style={{ marginLeft: 5, color: COLOURS.secondary, ...FONTS.body3 }}>+{friendList.length - 3} More</Text>
                </View>
            )
        }
    }

    return (
        <View style={styles.container}>
            {/* New Plants! */}
            <View style={{ height: "30%", backgroundColor: COLOURS.white }}>
                <View
                    style={{
                        flex: 1,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        backgroundColor: COLOURS.primary
                    }}
                >
                    <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ color: COLOURS.white, ...FONTS.header2, fontWeight: "bold" }}>New Plants!</Text>
                            <TouchableOpacity
                                onPress={() => { console.log("Focus on password") }}
                            >
                                <Image
                                    source={icons.focus}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20
                                    }}
                                /> 
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: SIZES.base }}>
                            <FlatList 
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={newPlants}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item, index }) => renderNewPlants(item, index)}
                            />
                        </View>
                    </View>
                </View>    
            </View>

            {/* Today's Share... */}
            <View style={{ height: "50%", backgroundColor: COLOURS.lightGrey }}>
                <View
                    style={{
                        flex: 1,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        backgroundColor: COLOURS.white
                    }}
                >
                    <View style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ color: COLOURS.secondary, ...FONTS.header2, fontWeight: "bold" }} >Today's Share...</Text>
                            <TouchableOpacity
                                onPress={() => { console.log("See More On Pressed") }}
                            >
                                <Text style={{ color: COLOURS.secondary, ...FONTS.body3 }}>See More</Text>
                            </TouchableOpacity>
                        </View>
                    

                    <View style={{ flexDirection: 'row', height: "86%", marginTop: SIZES.base }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                style={{ flex: 1 }}
                                onPress={() => { console.log("Plant On Pressed") }}
                            >
                                <Image 
                                    source={images.plantFive}
                                    resizeMode="cover"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 20
                                    }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ flex: 1, marginTop: SIZES.font }}
                                onPress={() => { console.log("Plant On Pressed") }}
                            >
                                <Image 
                                    source={images.plantSix}
                                    resizeMode="cover"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 20
                                    }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1.3 }}>
                            <TouchableOpacity
                                style={{ flex: 1, marginLeft: SIZES.font }}
                                onPress={() => { console.log("Plant On Pressed") }}
                            >
                                <Image 
                                    source={images.plantSeven}
                                    resizeMode="cover"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 20
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                 </View>
            </View>
        </View>

            {/* Added Friend */}
            <View style={{ height: "20%", backgroundColor: COLOURS.lightGrey }}>
                <View style={{ flex: 1, backgroundColor: COLOURS.lightGrey }}>
                    <View style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                        <Text style={{ color: COLOURS.secondary, ...FONTS.header2, fontWeight: "bold" }}>Added Friends</Text>
                        <Text style={{ color: COLOURS.secondary, ...FONTS.body3 }}>{friendList.length} Total</Text>
                        
                        <View style={{ flexDirection: 'row', height: '60%' }}>
                            {/* Friends */}
                            <View style={{ flex: 1.3, flexDirection: 'row', alignItems: 'center' }}>
                                {renderFriendsComponent()}
                            </View>
                            
                            {/* Add Friends */}
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <Text style={{ color: COLOURS.secondary, ...FONTS.body3 }}>Add New</Text>
                                <TouchableOpacity
                                    style={{
                                        marginLeft: SIZES.base,
                                        width: 40,
                                        height: 40,
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: COLOURS.grey
                                    }}
                                    onPress={() => { console.log("Add Friend On Pressed") }}
                                >
                                    <Image
                                        source={icons.plus}
                                        resizeMode="contain"
                                        style={{
                                            width: 20,
                                            height: 20
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:  {
        flex: 1
    }
})

export default Home; 