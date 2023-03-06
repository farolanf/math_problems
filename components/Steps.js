import { View, Text } from 'react-native'
import styles from '../styles'

function Step(props) {
    return (
        <View style={[styles.step, props.style]}>
            {props.children}
        </View>
    )
}

export default function Steps(props) {
    return (
        <View style={styles.stepsContainer}>
            {props.steps.map((step, i) => (
                <Step key={i} style={[step.current && styles.currentStep]}>
                    {step.state === 'correct' && <Text style={styles.stepText}>&#x2713;</Text>}
                </Step>
            ))}
        </View>
    )
}
