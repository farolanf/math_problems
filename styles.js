import { StyleSheet, NativeModules, Platform } from 'react-native'

const { StatusBarManager } = NativeModules

const safePaddingTop = Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0

const theme = {
    primaryColor: '#4d0179',
}

const styles = StyleSheet.create({
    lightText: {
        color: 'white',
    },
    icon: {
        width: 30,
        height: 30,
        color: 'white',
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
        maxHeight: 64,
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
        fontSize: 16,
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10,
        color: 'black',
        width: 8,
        height: 8,
        overflow: 'hidden',
        fontWeight: 600,
        borderRadius: 10000,
        borderColor: 'white',
        borderWidth: StyleSheet.hairlineWidth,
    },
    currentStep: {
        width: 12,
        height: 12,
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
