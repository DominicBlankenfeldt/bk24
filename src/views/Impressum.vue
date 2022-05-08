<template>
  <div class="impressum row d-flex justify-content-center m-auto mt-4">
    <div class="headline col-12 d-flex justify-content-center mt-4 p-1">
      Impressum
    </div>
    <div class="body my-4 p-1">
      <div class="mx-4">
        <div class="topline my-2">Angaben gemäß § 5 TMG:</div>
        <div class="mb-2">
          Die Internetseite
          <a style="color: #d5322c" href="https://baukoenig24.de"
            >https://baukoenig24.de</a
          >
          wird betrieben von:
        </div>
        <div>
          <b>Baukoenig24 UG<br />(haftungsbeschränkt)</b>
        </div>
        <div class="mb-3">
          Vertreten durch:<br />
          Svea Käding<br />
          Kieler Str. 4a<br />
          24247 Mielkendorf<br />
        </div>
        <div class="topline my-2">Kontakt:</div>
        <div class="mb-5">
          Telefon: 04347 / 901 03 47<br />
          Telefax: 04347/ 901 03 57<br />
          E-Mail: info@baukoenig24.de<br />
        </div>
        <div class="topline my-2">Registereintrag:</div>
        <div class="mb-5">
          Eintragung im Handelsregister.<br />
          <b>Registergericht:</b> Amtsgericht Kiel<br />
          <b>Registernummer:</b> HRB 19813 KI<br />
        </div>
        <div class="topline my-2">Umsatzsteuer:</div>
        <div class="mb-5">
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
          DE32 0212 967
        </div>
        <div class="topline my-2">Streitschlichtung</div>
        <div class="mb-5">
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:
          <a style="color: #d5322c" href="https://ec.europa.eu/consumers/odr"
            >https://ec.europa.eu/consumers/odr</a
          >
          Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
          bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </div>
        <div class="topline my-2">Haftung für Inhalte</div>
        <div class="mb-5">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </div>
        <div class="topline my-2">Haftung für Links</div>
        <div class="mb-5">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </div>
        <div class="topline my-2">Urheberrecht</div>
        <div class="mb-2">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen. Quelle:
          <a style="color: #d5322c" href="https://e-recht24.de">eRecht24</a>
        </div>
        <div class="footer">
          © 2020 Baukoenig24.de – Alle Rechte vorbehalten. Created by Dominic
          Blankenfeldt.
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.impressum {
  background-color: white;
  width: 90vw;
  height: 79vh;
  overflow: auto;
}
.headline {
  color: white;
  font-size: 6vh;
  font-weight: bold;
  background-color: #d5322c;
  @media (max-width: 550px) {
    font-size: 4vh;
  }
}
.body {
  font-size: 2.5vh;
  @media (max-width: 550px) {
    font-size: 2vh;
  }
}
.topline {
  font-size: 4vh;
  font-weight: bold;
  @media (max-width: 550px) {
    font-size: 2.5vh;
  }
}
.footer {
  font-weight: lighter;
  font-size: 1vh;
}
</style>
