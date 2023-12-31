
// @app
import React, {
    useState
} from 'react';
import {
    Image,
    View,
} from 'react-native';

import Colors from '../../../styles/Colors';
import { styles } from '../styles';

import Title from '../../../components/Title';

export const RenderItem = ({ data, rowMap, }) => {
    const [noOfItem, setNoOfItem] = useState(data?.item?.noOfItem)
    return (

        <View style={styles.rowFront}>
            <Image style={styles.cartItemImg} source={{ uri: data.item.photoURL }} />

            <View style={styles.cartItemContentWrapper}>
                <View>
                    <Title
                        type={`Poppin-14`}
                        color={Colors.primary}
                        weight={`600`}
                        title={data?.item?.name}
                    />
                    <Title
                        type={`Poppin-11`}
                        color={Colors.fontColor}
                        weight={`400`}
                        title={data?.item?.company} />
                </View>
                <View style={styles.cartItemContentBody}>
                    <Title type={`Poppin-14`} color={Colors.primary} weight={`700`} title={(Number(data?.item?.price) * noOfItem).toFixed(2)} />
                    <View style={[styles.noOfItemWrapper, styles.mr2]}>

                        <View />
                        <Title
                            title={noOfItem}
                            color={Colors.primary}
                            weight={'400'}
                            type={`Poppin-14`} />
                        <View />
                    </View>
                </View>
            </View>
        </View>
    )
} 