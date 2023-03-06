import { View, Text, Image, Pressable } from 'react-native'
import styles from '../styles'
import image from '../assets/icon.png'
import icon from '../assets/favicon.png'

export default function ProblemView(props) {
    return (
        <View style={styles.problemContainer}>
            <Text style={styles.problemBody}>{props.body}</Text>
            <View style={styles.problemImagesContainer}>
                <Image style={styles.problemImage} source={image} />
                <Image style={styles.problemImage} source={image} />
            </View>
            <View style={styles.problemFooter}>
                <Pressable style={styles.nextButton} onPress={props.onNext}>
                    <Text style={[styles.nextButtonText]}>&#x276F;</Text>
                </Pressable>
            </View>
        </View>
    )
}
