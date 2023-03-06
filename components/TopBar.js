import { View, Text, Image } from 'react-native'
import Steps from './Steps'
import styles from '../styles'
import icon from '../assets/favicon.png'

export default function TopBar(props) {
    return (
        <View style={styles.topBar}>
            <Image style={styles.icon} source={icon} />
            <View style={styles.topBarCenter}>
                <Steps steps={props.steps} />
                <Text style={[styles.topBarTitle, styles.lightText]}>{props.title}</Text>
            </View>
            <Image style={styles.icon} source={icon} />
        </View>
    )
}
