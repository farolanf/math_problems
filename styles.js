import { StyleSheet, NativeModules, Platform } from 'react-native'

const { StatusBarManager } = NativeModules

const isWeb = Platform.OS === 'web'

const safePaddingTop = Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0

const theme = {
    primaryColor: '#4d0179',
    stepSize: 10,
    currentStepSize: 14,
}

const styles = StyleSheet.create({
    lightText: {
        color: 'white',
    },
    icon: {
        width: 30,
        height: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBar: {
        color: '#fff',
        backgroundColor: theme.primaryColor,
    },
    topBar: {
        maxHeight: safePaddingTop + 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#fff',
        backgroundColor: theme.primaryColor,
        paddingTop: safePaddingTop + 17,
        paddingBottom: 17,
        paddingHorizontal: 15,
    },
    topBarCenter: {
        alignItems: 'center',
    },
    topBarTitle: {
        fontSize: 15,
        fontWeight: '600',
        marginTop: 12,
    },
    stepsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginTop: 6,
    },
    step: {
        justifyContent: 'center',
        alignItems: 'center',
        width: theme.stepSize,
        height: theme.stepSize,
        maxWidth: theme.stepSize,
        maxHeight: theme.stepSize,
        overflow: 'hidden',
        borderRadius: 10000,
        borderColor: 'white',
        borderWidth: StyleSheet.hairlineWidth,
    },
    stepText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: theme.stepSize,
        lineHeight: theme.stepSize,
        width: theme.stepSize,
        height: theme.stepSize,
        maxWidth: theme.stepSize,
        maxHeight: theme.stepSize,
        marginTop: isWeb ? 0 : 2,
        color: 'black',
        backgroundColor: 'white',
    },
    currentStep: {
        width: theme.currentStepSize,
        height: theme.currentStepSize,
        maxWidth: theme.currentStepSize,
        maxHeight: theme.currentStepSize,
        borderWidth: 4,
    },
    problemContainer: {
        paddingTop: 40,
        paddingHorizontal: 18,
    },
    problemBody: {
        fontSize: 18,
        marginBottom: 80,
    },
    problemImage: {
        width: 120,
        height: 120,
    },
    problemImagesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 20,
    },
    problemFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 80,
        paddingRight: 40,
    },
    nextButton: {
        width: 40,
        height: 40,
        backgroundColor: theme.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10000,
    },
    nextButtonText: {
        color: 'white',
        fontSize: 20,
        lineHeight: 20,
    },
    bgWhite: {
        backgroundColor: 'white',
    },
})

export default styles
