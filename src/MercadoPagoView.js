import React, { Component } from 'react';
import { StyleSheet, WebView} from 'react-native';

const htmlContent = `
  <br><br><br><br><br><br>
  <center>
    <h2>Felicitaciones! estas a un paso de tener un lugar reservado en tu lugar favorito. </h2>
    <a mp-mode="dftl" href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=95168702-b46be8f3-e84b-49da-94e3-1f7e663fd85e" name="MP-payButton" class='blue-ar-l-rn-none'>
      <img src="http://flaviatuteacher.com/img/mp.png" />
    </a>
  </center>
  <script type="text/javascript">
    (function(){function $MPC_load(){window.$MPC_loaded !== true && (function(){var s = document.createElement("script");s.type = "text/javascript";s.async = true;s.src = document.location.protocol+"//secure.mlstatic.com/mptools/render.js";var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);window.$MPC_loaded = true;})();}window.$MPC_loaded !== true ? (window.attachEvent ?window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false)) : null;})();
  </script>
`;

export default class App extends Component {
    render () {
        return (
          <WebView
            style={styles.container}
            originWhitelist={['*']}
            source={{html: htmlContent}}
          />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
