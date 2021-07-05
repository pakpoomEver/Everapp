import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableHighlight } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'



const HomeScreen = () => {
    const [item, setItam] = useState([
        {
            id: 1,
            title: 'Health coverage elite health',
            detail: 'High protection to meet health needs Meet all health needs with high coverage ranging from 20-100 million baht/year',
            scrImg: require('../assets/images/a1.jpg'),
            premium: 70,
            premium_per: 'day',
        },
        {
            id: 2,
            title: 'Health coverage good health ',
            detail: 'good health insurance easy to understand, not complicated Because a single payout limit is up to 5 million baht, less conditions, but a lot of protection. ',
            scrImg: require('../assets/images/a2.jpg'),
            premium: 55,
            premium_per: 'day',
        },
        {
            id: 3,
            title: 'Extra Care Plus Project ',
            detail: 'Welfare is not enough, do not delay Because top up medical expenses can help fill out the welfare that you have up to 5 hundred thousand baht (1) at a',
            scrImg: require('../assets/images/a3.jpg'),
            premium: 285,
            premium_per: 'month',
        },
        {
            id: 4,
            title: 'Credit Care',
            detail: 'Coverage in case of accidental death up to 1 million baht Compensation for credit card in case of death or total permanent disability, up....',
            scrImg: require('../assets/images/a4.jpg'),
            premium: 3,
            premium_per: 'day',
        },
        {
            id: 5,
            title: 'Easy E-LIFE',
            detail: 'Easy E-LIFE life insurance from FWD gives you more convenience with online life insurance. Easy to contact, can be done at your fingertips. Ignore the .....',
            scrImg: require('../assets/images/a5.jpg'),
            premium: 2200,
            premium_per: 'year',
        },
        {
            id: 6,
            title: 'Easy E-LIFE',
            detail: 'Easy E-LIFE life insurance from FWD gives you more convenience with online life insurance. Easy to contact, can be done at your fingertips. Ignore the .....',
            scrImg: require('../assets/images/a5.jpg'),
            premium: 2200,
            premium_per: 'year',
        },
    ]);

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.textHeader_H}>Health insurance</Text>
                <Text style={style.textHeader_T}><FontAwesome5 name='check-circle' size={12} color='#fff' />  More than 100 life insurance packages.</Text>
                <Text style={style.textHeader_T}><FontAwesome5 name='check-circle' size={12} color='#fff' />  Free health insurance consultation.</Text>
            </View>
            <View style={style.body}>
                <FlatList data={item}
                    renderItem={({ item }) =>
                        <TouchableHighlight onPress={ () => console.log('eiei')} >
                            <View style={style.box}>
                                <Image source={item.scrImg} style={style.img} />
                                <View style={style.boxText}>
                                    <Text style={style.text_box_title}>
                                        {item.title}
                                    </Text>
                                    <Text style={style.text_box_detail}>
                                        {item.detail}
                                    </Text>
                                    <Text style={style.text_box_premium}>
                                        {item.premium} THB/{item.premium_per}
                                    </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    } />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#026487",
        flex: 1,
    },
    body: {
        flex: 4,
        marginTop: 5,
        marginBottom: 80,
    },
    textHeader_H: {
        color: "#fff",
        fontSize: 24,
        marginLeft: 30,
        marginTop: 40,
    },
    textHeader_T: {
        color: "#fff",
        fontSize: 12,
        marginLeft: 30,
        paddingTop: 10,
    },
    box: {
        backgroundColor: '#fff',
        height: 100,
        width: 340,
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#2AAE90',
        borderWidth: 0.5,
        borderRadius: 10,
        flexDirection: 'row',
    },
    boxText: {
        marginLeft: 10,
        flexDirection: 'column'
    },
    text_box_title: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Roboto',
    },
    text_box_detail: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'Roboto',
        maxWidth: 180,
        maxHeight: 60,
    },
    text_box_premium: {
        fontSize: 12,
        color: '#026487',
        fontFamily: 'Roboto',
        maxWidth: 180,
    },
    img: {
        width: 145,
        height: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    }
})
export default HomeScreen;