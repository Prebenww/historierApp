import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, TextInput} from "react-native-paper"
import Colors from "../constants/Colors"

const LoginScreen = ({navigation}) => {
    return (

<View style={{ backgroundColor: '#000000', flex: 1, justifyContent: "center", alignItems: "center"}}>
    <Image
        style={styles.tinyLogo}
        source={{
            uri: "https://images.unsplash.com/photo-1580571313472-5bd3de1d1ab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        }}
    />
        <View style={styles.container}>
            <ScrollView style={styles.box}>
                <View style={styles.innerBox}>
                <Text style={{color: Colors.orangeColor}}>Min Breakup historie</Text>
                <Text style={{color: Colors.orangeColor}}>
                    Denne fyren kjempet lenge og hardt for å bli sammen med meg. Han ønsket å være den som ville gjøre meg lykkelig. Vi ble til slutt sammen og alt føltes bare såå bra. Overalt hvor vi gikk la folk legge merke til hvor mye vi brydde oss om hverandre. Selv tilfeldige mennesker i heiser ville stoppe opp og fortelle oss hvor søte vi var sammen.
                    I 4 år var vi superlykkelig, ingen antydning til noe annet. Vi hadde en ganske stor krangel, men den gjorde oss bare sterkere. Helt siden starten av forholdet, uansett hva, så fikk jeg en god morgen eller god natt tekst, bilder, «hvordan har du det» meldinger, morsomme videoer og memes. Han ga meg full tilgang til telefon- og sosiale mediekontoer. Jeg ba ikke engang om noe passord, men han sa at han ikke hadde noe å skjule uansett.
                    Så etter 4 år var snudde alt. Plutselig hadde telefonen hans tastelås, og han forlot aldri telefonen sin lengre. Ikke et sekund engang. For første gang i forholdet følte jeg meg som dritt. Jeg spurte han om alt gikk bra for tiden, men han svarte bare «det går bra».
                    En dag jeg sov hos han, og han dro på fotballtrening om morgenen, når jeg hørte at bilen kjørte og var borte, så merket jeg umiddelbart at iPaden hans lå på bordet. Jeg tok tak i den, skrudde den på, gikk inn på Facebook men …. Facebook-kontoen var logget av. Jeg går innpå Playstationen hans, alt er logget av. Hva nå? Tenkte jeg. Jeg ser over hele rommet hans, jeg merker at han forlot ryggsekken med den bærbare pcen hans, jeg åpnet den, Facebook-kontoen hans var logget på. Endelig! Jeg så meldingene hans, og der var det. Han snakket med en jente.
                    Det var en jente jeg kjente. Jeg hadde truffet henne før. Hun var den samme jenta som eksen min nettopp hadde skaffet en jobb til. Det er også den samme jenta som han fortalte meg at vennen hans hadde et stort crush på. Han sa til meg at han hjalp dem å hooke opp, at var en «wingman». Vi gikk til og med på doubel date sammen!
                    Men ut fra meldingene så det ut som om han ikke virkelig hjalp vennen sin. Men i stedet hjalp han seg selv. Jeg leste nesten hele samtalen deres. Det var faktisk veldig vanskelig å lese fordi jeg ikke kunne slutte å gråte og skjelve. Det er hun som har fått alle «god natt» og «god morgen» meldingene. I meldingene søkte jeg etter ord som “sex”, “kyss”, “kos”. Det var masse meldinger som «vil kose med deg», «gleder meg til å se deg i kveld», «Vil bare holde rundt deg. Og alt dette bak min rygg.
                    Jeg løp ut av huset, jeg følte meg så ødelagt, så forvirret. Han ringte og ringte meg for å spørre hva som foregikk. Til slutt svarte jeg og ba ham begynne å forklare alt! Han ble helt sjokkert over at jeg hadde funnet det ut. Men han startet å forklare. Alt han sa ga mye mening, og jeg følte meg som den verste kjæresten. Denne jenta var hjemløs, så han ga henne en jobb. Hun har ikke mye penger, så han kjøper mat til henne når de jobber. Hun har heller ingen familie og veldig få venner, så han var en god venn og lyttet på henne. Det hele hørtes så uskyldig ut.
                    Etter alt dette lovet eksen min at han aldri ville være alene med henne igjen og at forholdet deres ville bli holdt minimalt. Hvis jenta trengte noe, ville vi begge hjelpe henne. Jeg trodde at ting ville gå tilbake til det normale og at han ville være seg selv igjen. Men nei ...
                    Noen dager senere tekstet jeg ham "Hva skjer", han svarte at han bare skulle ut for å spise lunsj. Bokstavelig talt, to sekunder senere sender mamma meg melding om at hun hadde sett eksen min sammen med denne jenta (for hun visst nå hvem det var). Tuller du med meg!? Jeg kunne ikke fokusere på jobben min, jeg hyperventilerte, jeg fikk ikke puste. Nok en gang følte jeg meg helt dritt. Jeg dro midt i prosjektet mitt på jobben for å ringe ham. Han svarte og var lei seg og sa at jeg måtte forstå at denne jenta trenger hjelp. YEAH RIGHT! Jeg prøvde virkelig hardt å være forståelsesfull men jeg var så sint at han ga henne alt!!
                    Etter alt dette, en dag var han hjemme hos meg, og telefonen hans fortsatte å motta meldinger. Jeg så det var fra henne. Jeg spurte om jeg kunne se dem. Han klikket og sa: "kommer du alltid til å være slik ?!".
                    Nok var nok. Jeg sa jeg måtte se meldingene. Han kastet bokstavelig talt telefonen mot meg. Jeg brydde meg ikke, jeg ville bare vite sannheten. Før jeg åpnet den, spurte jeg ham hva jeg ville finne. Han ble stille men sa det til slutt. Han sa at han hadde kysset henne. Og de siste ukene har han sovet i bilen hennes for å betrygge henne ... Moren hans hadde funnet ut at han delte sengen sin med henne, så moren hans kastet henne ut. Moren hans fortalte jenta at hun aldri ville se henne der igjen, siden hun visste at han var sammen med meg. Og hun sa til ham at han skulle fortelle alt sammen til meg. Men det gjorde han selvfølgelig ikke før nå.
                    På det tidspunktet følte jeg at han hadde stukket meg i ryggen med en kniv. Jeg var helt nummen i hele kroppen. Jeg ble så skuffet og lei meg av tanken på at leppene og sengen hans ble delt med noen andre. Vi snakket hele natten, jeg sov ikke, jeg spurte ham spørsmål fordi jeg bare ikke kunne forstå. Han kunne ikke engang svare på dem. Han gråt lenge, men i det øyeblikket visste jeg at det ikke ville være det samme. Jeg kjempet for ham, ga ham muligheter, spurte hva han ville gjøre videre. Han visste ikke. Han dro.
                    I noen dager hørte jeg ingenting fra ham. Ingen meldinger eller noe. Jeg fikk en e-post (av alle ting) - han sa at det var slutt. Han fortalte at han visste ikke hvem han var lenger. Han gikk for den klassiske, "det er ikke deg, det er meg" -talen. Mange unnskyldninger. Men det som gjorde mest vondt var at han sa at han ikke skulle fortsette å date den andre jenten, for da vil alle vite at han forlot meg for henne. Wow .... han holdt fortsatt på imaget sitt. Herregud.
                    Etter hvert fant vennen hans, som hadde crushet på jenta, ut at de to hadde en greie og det var et stort rot med mye drama. Både min familie, hans familie, fotball-laget, venner og jobben fikk vite om det. Etter alt dramaet fikk jeg en tilfeldig tekst fra ham som sa at han var deprimert. Alle vet om det som skjedde, og alle som han kjenner, hater ham nå. Han prøvde faktisk å begå selvmord.
                    En måned senere returnerte han endelig tingene mine fra rommet sitt. Sammen med den største blomsterbuketten jeg noensinne har sett og et brev hvor han beklaget.
                    Jeg kastet blomstene i søpla.

                </Text>
                </View>
            </ScrollView>
        </View>
</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    tinyLogo: {
        width: "70%",
        height: "27%",
    },
    box: {
        borderWidth: 1,
        borderColor: Colors.orangeColor,
        width: "95%",
        height: "80%",
    },
    innerBox: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        padding: 20
    }

})

export default LoginScreen;
