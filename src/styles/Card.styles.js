const styles = {
    container: {
        bgcolor: 'white',
        borderRadius: 1,
        padding: 4,
    },

    Box: {
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: { xs: 'center', lg: 'normal' },
        justifyContent: 'space-between',
    },

    title: { pb: '50px' },

    Box__Img: {
        width: '800px',
        height: '500px',
        m: '20px 30px',
    },

    Box__body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        width: '450px'
    },

    Box__footer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },

    Box__footer__1: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    Box__footer__2: {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
    },
}

export default styles