{
	"translatorID": "e5e34825-1314-43bd-a9fe-f38f6ab48403",
	"label": "Jahrbuch",
	"creator": "Aurimas Vinckevicius",
	"target": "^https?://www\\.emis\\.de/cgi-bin/jfmen/MATH/JFM/",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsv",
	"lastUpdated": "2017-11-04 10:50:28"
}

function detectWeb(doc, url) {
	if (getID(url)) return 'journalArticle';	//could be book, but it's hard to tell

	if (url.indexOf('/cgi-bin/') != -1 &&
		(url.indexOf('/quick.html') != -1 ||
			url.indexOf('/full.html') != -1 ||
			url.indexOf('/command.html') != -1) &&
		getSearchResults(doc).length) {
		return 'multiple';
	}
}

function getSearchResults(doc) {
	return ZU.xpath(doc, '//input[@type="CHECKBOX" and @name="an" and following-sibling::*[1][name()="A"]]');
}

function getID(url) {
	var id = url.match(/[?&]an=(JFM[^&]+)/i);
	return id ? id[1] : false;
}

function doWeb(doc, url) {
	var id = getID(url);
	if (!id) {
		var res = getSearchResults(doc);
		var items = {};
		for (var i=0, n=res.length; i<n; i++) {
			var title = doc.evaluate('./following-sibling::b[not(./a)]', res[i], null, XPathResult.ANY_TYPE, null).iterateNext();
			items[encodeURIComponent(res[i].value)] = title.textContent;

		}

		Z.selectItems(items, function(selectedItems) {
			if (!selectedItems) return true;

			var ids = [];
			for (var i in selectedItems) {
				ids.push(i);
			}
			scrape(ids);
		})
	} else {
		scrape([id]);
	}
}

function scrape(ids) {
	var url = '/cgi-bin/jfmen/JFM/en/quick.html?type=bibtex&format=complete' +
				'&an_op=or&an=' + ids.join('&an=');
	ZU.doGet(url, function(text) {
		var bibtex = text.match(/<pre>([\s\S]+?)<\/pre>/i);
		if (!bibtex) throw new Error("Could not find BibTeX");

		//load BibTeX translator
		var translator = Zotero.loadTranslator('import');
		translator.setTranslator("9cb70025-a888-4a29-a210-93ec52da40d4");
		translator.setString(bibtex[1]);
		translator.setHandler('itemDone', function(obj, item) {
			//volume, issue, and pages end up in the publicationTitle
			if (item.publicationTitle) {
				var vip = item.publicationTitle.match(/,?\s*(?:\((\d+)\)\s*)?(\d+)\s*,\s*(\d+(?:-\d+))/);
				if (vip) {
					item.publicationTitle = item.publicationTitle.substring(0,
												item.publicationTitle.indexOf(vip[0]));
					var ptLoc = item.publicationTitle.split(/\s*,\s*/);
					item.publicationTitle = ptLoc[0];
					if (ptLoc.length > 1) item.place = ptLoc[1];

					item.journalAbbreviation = item.publicationTitle;

					item.volume = vip[1];
					item.issue = vip[2];
					item.pages = vip[3];
				}
			}

			var callNumber = ids.shift();	//hopefully the records come back in the order they are requested
			item.attachments.push({
				title: 'Link to Jahrbuch Record',
				url: 'http://jfm.sub.uni-goettingen.de/cgi-bin/jfmen/JFM/en/' +
						'quick.html?type=html&format=complete&an=' + callNumber,
				mimeType: 'text/html',
				snapshot: false
			});
			item.callNumber = decodeURIComponent(callNumber);

			item.complete();
		});
		translator.translate();
	}, null, 'windows-1252');
}/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "http://www.emis.de/cgi-bin/jfmen/MATH/JFM/en/quick.html?first=1&maxdocs=20&type=html&an=JFM%2068.0003.01&format=complete",
		"items": [
			{
				"itemType": "journalArticle",
				"creators": [
					{
						"firstName": "R. S.",
						"lastName": "Williamson",
						"creatorType": "author"
					}
				],
				"notes": [],
				"tags": [],
				"seeAlso": [],
				"attachments": [
					{
						"title": "Link to Jahrbuch Record",
						"mimeType": "text/html",
						"snapshot": false
					}
				],
				"itemID": "JFM68.0003.01",
				"title": "The Saqqara graph: its geometrical and architectural significance.",
				"language": "English",
				"publicationTitle": "Nature",
				"date": "1942",
				"abstractNote": "Im Jahre 1925 wurde an der Stufenpyramide des Zoser in Sakkara bei Kairo eine Kalksteinscherbe gefunden von der Gr??sse 15 zu 17,5 zu 5 cm. Auf ihr war auf einer Seite eine Figur aufgezeichnet, welche man sich als H??lfte eines durch eine Sehne abgeschnittenen Kreisbogens $&lt; 180^\\circ$ denken kann. Die Sehne ist aber nicht vorhanden, wohl die Pfeilh??he des Bogens; ferner sind parallel zur Pfeilh??he von dem Bogen aus noch vier Geraden gezeichnet, welche die Sehne, wenn sie vorhanden w??re, in f??nf gleiche Teile zerlegen w??rden. Die Geraden sind auch nicht vollst??ndig durchgezeichnet. Zwischen ihnen stehen Zahlen, welche als die L??ngen ausgelegt werden, welche die Geraden einschliesslich Pfeilh??he bis zur Sehne haben w??rden. ??t Gunn\\/ (An architect's diagram of the third dynasty, Ann. Service Antiquit??s ??gypte, Cairo, 25 (1925), 197 ff.) legt das Ganze aus als Entwurf eines ??gyptischen Architekten zur Konstruktion eines Grabgew??lbes, und diese Auslegung d??rfte richtig sein, da die Scherbe ganz nahe bei einem derartigen Gew??lbe gefunden wurde. Verf. kn??pft an die Auslegung von Gunn an, m??chte aber daraus und aus den vorgefundenen Massen eine allgemeine Methode zur Konstruktion und Berechnung derartiger Bogen entwickeln, und ??? das ist f??r uns das Wichtige ???, glaubt, feststellen zu k??nnen, dass die ??gyptischen Architekten dabei das pythagoreische Dreieck 3, 4, 5 (bzw. 147, 196, 245) verwandten. Dieses w??re also im 5. Jahrtausend vor Chr. schon in ??gypten bekannt gewesen. Die Entwicklung enth??lt manche ???wenn???, aber sie hat auch deshalb etwas sehr Verlockendes, weil bei einem so hohen Alter dieses pythagoreischen Dreiecks in ??gypten, wo es ja nach Plutarch in mystischer Beziehung zum m??nnlichen bzw. weiblichen Prinzip und zur Geburt gestanden haben soll, vielleicht auch erkl??rt werden k??nnte, wie die Kenntnis des mystischen Zahlentripels 3, 4, 5 eine so weite Verbreitung in Afrika finden konnte, worauf ich wiederholt in der Scientia, Bologna, 49 (1931), 423-436 (F. d. M. 57, 4 (JFM57.0004.*)), im Archaion, Roma, 14 (1932), 207-220 (F. d. M. 58, 7 (JFM58.0007.*)) sowie in der M??nchener med. Wochenschr. 1937, 5 ff. und in der Dermatolog. Z., Basel, 1938, 260 ff., hinwies. Entweder verbreitete sich die Kenntnis des Zahlentripels ohne das Dreieck von ??gypten aus allm??hlich bis in den Westsudan und nach Uganda, oder aber, umgekehrt, aus einer all diesen V??lkern mit den ??gyptern gemeinsamen Unterschicht entstand das mystische Zahlentripel 3, 4, 5, welches sich dann in ??gypten weiter zu dem Dreieck entwickelte, und es w??re damit eine Wurzel des ???Pythagoras??? gefunden.",
				"journalAbbreviation": "Nature",
				"issue": "150",
				"pages": "460-461",
				"callNumber": "JFM 68.0003.01",
				"libraryCatalog": "Jahrbuch",
				"shortTitle": "The Saqqara graph"
			}
		]
	},
	{
		"type": "web",
		"url": "http://www.emis.de/cgi-bin/jfmen/MATH/JFM/en/quick.html?first=1&maxdocs=20&type=html&an=JFM%2068.0052.03&format=complete",
		"items": [
			{
				"itemType": "journalArticle",
				"creators": [
					{
						"firstName": "N.",
						"lastName": "Svartholm",
						"creatorType": "author"
					}
				],
				"notes": [],
				"tags": [],
				"seeAlso": [],
				"attachments": [
					{
						"title": "Link to Jahrbuch Record",
						"mimeType": "text/html",
						"snapshot": false
					}
				],
				"itemID": "JFM68.0052.03",
				"title": "On the algebras of relativistic quantum theories.",
				"language": "English",
				"publicationTitle": "Fysiograf. S??llsk. Lund F??rhdl. 12, Nr. 9, 15 S",
				"date": "1942",
				"callNumber": "JFM 68.0052.03",
				"libraryCatalog": "Jahrbuch"
			}
		]
	},
	{
		"type": "web",
		"url": "http://www.emis.de/cgi-bin/jfmen/MATH/JFM/en/quick.html?first=1&maxdocs=20&type=html&an=JFM%2068.0078.01&format=complete",
		"items": [
			{
				"itemType": "journalArticle",
				"creators": [
					{
						"firstName": "P.",
						"lastName": "Erd??s",
						"creatorType": "author"
					}
				],
				"notes": [],
				"tags": [],
				"seeAlso": [],
				"attachments": [
					{
						"title": "Link to Jahrbuch Record",
						"mimeType": "text/html",
						"snapshot": false
					}
				],
				"itemID": "JFM68.0078.01",
				"title": "On the asymptotic density of the sum of two sequences.",
				"language": "English",
				"publicationTitle": "Ann. Math., Princeton,",
				"date": "1942",
				"abstractNote": "Es m??gen $\\frak A$, $\\frak B$ Mengen nichtnegativer ganzer Zahlen bedeuten, $\\frak C=\\frak A+\\frak B$ ihre Summe, $A(n)$, $B(n)$, $C(n)$ die Anzahlen ihrer positiven Elemente $\\leqq n$, ferner ??, ??, ?? die Dichten von $\\frak A$, $\\frak B$ und $\\frak C$, $\\alpha^*$, $\\beta^*$, $\\gamma^*$ ihre asymptotischen Dichten und $\\beta_B$ die Besicovitch-Dichte: $\\beta_B=\\underline\\textf\\/in\\, \\dfracB(n)n+1$, $n = 1, 2, \\ldots$. Dann gilt nach Besicovitch $\\gamma\\geqq\\alpha+\\beta_B$, wenn $0??n\\frak B$ und $1??n\\frak A$ ist. Verf. modifiziert $\\beta_B$ zu $\\beta_1=\\underline\\textf\\/in\\, \\dfracB(n)n+1$, $n = k + 1, k + 2,\\ldots$, wobei ${1, 2,\\ldots, k}\\subseteqq\\frak B$ ist, und zeigt unter w??rtlicher ??bertragung des Besicovitchschen Beweises: $\\gamma\\geqq\\alpha+\\beta_1$ unter denselben Voraussetzungen. Dieses Resultat wird zum Beweis des folgenden Satzes mitverwendet: ??t Wenn\\/ ${0,1}\\subseteqq\\frak B$, $\\alpha^*+\\beta^*\\leqq 1$, $\\beta^*\\leqq\\alpha^*$ (nach Ansicht des Ref. wird von Verf. nur $\\dfrac\\beta^*2&lt;\\alpha^*$ benutzt) ??t ist, so gilt stets\\/ $\\gamma^* \\geqq\\alpha^*+\\dfrac12\\beta^*$, was von Verf. in einer fr??heren Arbeit nur f??r den Spezialfall $\\frak A=\\frak B$ bewiesen worden war. Zum Beweis wird gezeigt, dass schon eine der beiden Mengen ${\\ldots, a_i, a_i+1,\\ldots}$, oder ${\\ldots, a_i+b_k,\\ldots}$, $a_i\\ne 0$, $b_k\\ne 0$ eine asymptotische Dichte $\\geqq\\alpha^*+\\frac12\\beta^*$ besitzt. Vgl. hierzu eine demn??chst im J. reine angew. Math. von Ref. erscheinende Arbeit ???Zur Theorie der Dichten???.",
				"callNumber": "JFM 68.0078.01",
				"libraryCatalog": "Jahrbuch"
			}
		]
	}
]
/** END TEST CASES **/
