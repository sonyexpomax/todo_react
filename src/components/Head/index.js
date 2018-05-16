import Head from './Head';
import { connect } from 'react-redux';

function mapStateToProps (store) {
    return {
        loggedIn: store.user.loggedIn
    };
}

export default connect(mapStateToProps)(Head);
