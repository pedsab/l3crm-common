/// <reference path="_references.js" />

if (typeof (L3) == "undefined") { L3 = {}; }

L3.Crm = {

	Helpers: {

		Functions: {

			/*
            # Common Functions
            #
            # Nome: L3.Crm.Common.Functions.concatenateString
            # Descrição: Preencher valor de um campo texto, concatenando valores de campos no formulário, juntamente com texto específicos.
            # Como usar: Passar como parâmetros separados por vírgula a lista de campos e/ou texto e o campo de destino. Por exemplo, "firstname,-,lastname,@,mail.com","emailaddress1".
            # 
            # Nome: L3.Crm.Common.Functions.clearFields
            # Descrição: Limpar o valor dos campos informados em um formulário.
            # Como usar: Passar como parâmetros separados por vírgula a lista de campos. Por exemplo, "firstname,lastname,middlename".
            #
            # Nome: L3.Crm.Common.Functions.parseField
            # Descrição: Formatar o valor de um campo conforme um formato especificado. O caracter # representa o caracter a ser substituído.
            # Como usar: Passar como parâmetros separados por vírgula a lista de campos. Por exemplo, "l3crm_cpf","###.###.###-##","l3crm_cpf","CPF digitado inválido.".
            */

			/* Concatena valores de campos e textos e como output define o valor de um campo */
			concatenateString: function (arrayStringFields, destinyFieldName) {

				var resultString = "";
				var arrayFields = arrayStringFields.split(",");

				for (var i = 0; i < arrayFields.length; i++) {

					var attrFieldValue = Xrm.Page.getAttribute(arrayFields[i]);

					if (attrFieldValue) {

						if (attrFieldValue.getText != null) {

							resultString += attrFieldValue.getText();
						}
						else if (attrFieldValue.getValue() && attrFieldValue.getValue()[0].name) {

							resultString += attrFieldValue.getValue()[0].name;
						}
						else if (attrFieldValue.getValue()) {

							resultString += attrFieldValue.getValue();
						}
						else {

							resultString += "";
						}
					}
					else {
						resultString += arrayFields[i];
					}
				}

				var attrDestinyFieldName = Xrm.Page.getAttribute(destinyFieldName);

				if (!attrDestinyFieldName) {
					alert("O campo '" + destinyFieldName + "' não foi encontrado no formulário.");
					return;
				}

				if (attrDestinyFieldName.getValue() != resultString) {

					attrDestinyFieldName.setValue(resultString.trim());
					attrDestinyFieldName.setSubmitMode("always");
				}
			},

			/* Limpa o valor dos campos informados em um formulário  */
			clearFields: function (arrayStringFields) {

				var arrayFields = arrayStringFields.split(",");

				for (var i = 0; i < arrayFields.length; i++) {

					var attrFieldValue = Xrm.Page.getAttribute(arrayFields[i]);

					if (attrFieldValue)
						attrFieldValue.setValue(null);
				}
			},

			/* Valida e formata o valor do campo conforme o formato informado */
			parseField: function (fieldName, format, destinyFieldName, customMessage) {

				var errorMessage = customMessage || "O formato não é compatível com o valor fornecido.";

				var attrFieldName = Xrm.Page.getAttribute(fieldName);

				if (!attrFieldName && !attrFieldName.getValue())
					return "";

				var value = attrFieldName.getValue();

				if ((format.match(/#/g)).length != value.length) {

					alert(errorMessage);
					Xrm.Page.getAttribute(destinyFieldName).setValue(null);
					return;
				}


				var formattedValue = format;
				var valueCount = 0;

				for (var i = 0; i < formattedValue.length; i++) {

					if (formattedValue[i] == '#') {
						formattedValue = formattedValue.replace('#', value[valueCount]);
						valueCount++;
					}

					if (valueCount > value.length)
						break;
				}

				Xrm.Page.getAttribute(destinyFieldName).setValue(formattedValue);
			},
		}
	}
};