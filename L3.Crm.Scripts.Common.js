/// <reference path="_references.js" />

if (typeof (L3) == "undefined") { L3 = {}; }

L3.Crm = {

    Common: {

        Constants: {

            FORM_TYPE_CREATE: 1,
            FORM_TYPE_UPDATE: 2,
            FORM_TYPE_READ_ONLY: 3,
            FORM_TYPE_DISABLED: 4,
            FORM_TYPE_QUICK_CREATE: 5,
            FORM_TYPE_BULK_EDIT: 6,
        },

        Methods: {

            /* Validar o número de RG */
            validarRG: function (rg) {

                var MENSAGEM_ERRO_RG_INVALIDO = "RG digitado inválido.";
                var REG_EXP_SOMENTE_NUMEROS = new RegExp('^\\d+$');

                var rgTratado = rg;

                try {

                    if (!rgTratado)
                        throw new Error();

                    rgTratado = rgTratado.replace(/ /g, "");
                    rgTratado = rgTratado.replace(/\./g, "");
                    rgTratado = rgTratado.replace(/\-/g, "");
                    rgTratado = rgTratado.replace(/\(/g, "");
                    rgTratado = rgTratado.replace(/\)/g, "");

                    if (rgTratado.length != 8 && rgTratado.length != 9)
                        throw new Error();

                    return [
                        rgTratado.substr(0, 2),
                        ".",
                        rgTratado.substr(2, 3),
                        ".",
                        rgTratado.substr(5, 3),
                        "-",
                        rgTratado.substr(8, 1),
                    ].join("");
                }
                catch (e) {

                    alert(MENSAGEM_ERRO_RG_INVALIDO);

                    return null;
                }
            },

            /* Validar o número de RG */
            validarCEP: function (cep) {

                var MENSAGEM_ERRO_CEP_INVALIDO = "CEP digitado inválido.";
                var REG_EXP_SOMENTE_NUMEROS = new RegExp('^\\d+$');

                try {

                    var cepTratado = cep;

                    if (!cepTratado)
                        throw new Error();

                    cepTratado = cepTratado.replace(/\-/g, "");

                    if (cepTratado.length != 8)
                        throw new Error();

                    if (!cepTratado.match(REG_EXP_SOMENTE_NUMEROS))
                        throw new Error();

                    return [
                        cepTratado.substr(0, 5),
                        "-",
                        cepTratado.substr(5, 3),
                    ].join("");
                }
                catch (e) {

                    alert(MENSAGEM_ERRO_CEP_INVALIDO);

                    return null;
                }
            },

            /* Validar o número de CPF */
            validarCPF: function (cpf) {

                var MENSAGEM_ERRO_CPF_INVALIDO = "CPF digitado inválido.";
                var REG_EXP_SOMENTE_NUMEROS = new RegExp('^\\d+$');

                var cpfTratado = cpf;

                try {

                    if (!cpfTratado)
                        throw new Error();

                    cpfTratado = cpfTratado.replace(/ /g, "");
                    cpfTratado = cpfTratado.replace(/\./g, "");
                    cpfTratado = cpfTratado.replace(/\-/g, "");
                    cpfTratado = cpfTratado.replace(/\(/g, "");
                    cpfTratado = cpfTratado.replace(/\)/g, "");

                    if (cpfTratado.length != 11)
                        throw new Error();

                    if (!cpfTratado.match(REG_EXP_SOMENTE_NUMEROS))
                        throw new Error();

                    return [
                        cpfTratado.substr(0, 3),
                        ".",
                        cpfTratado.substr(3, 3),
                        ".",
                        cpfTratado.substr(6, 3),
                        "-",
                        cpfTratado.substr(9, 2)
                    ].join("");
                }
                catch (e) {

                    alert(MENSAGEM_ERRO_CPF_INVALIDO);

                    return null;
                }
            },

            /* Validar o número de CNPJ */
            validarCNPJ: function (cnpj) {

                var MENSAGEM_ERRO_CNPJ_INVALIDO = "CNPJ digitado inválido.";

                var cnpjTratado = cnpj;

                try {

                    if (!cnpjTratado)
                        throw new Error();

                    cnpjTratado = cnpjTratado.replace(/ /g, "");
                    cnpjTratado = cnpjTratado.replace(/\./g, "");
                    cnpjTratado = cnpjTratado.replace(/\-/g, "");
                    cnpjTratado = cnpjTratado.replace(/\(/g, "");
                    cnpjTratado = cnpjTratado.replace(/\)/g, "");

                    if (cnpjTratado.length != 14)
                        throw new Error();
                }
                catch (e) {

                    alert(MENSAGEM_ERRO_CNPJ_INVALIDO);

                    return null;
                }

                return [
                    cnpjTratado.substr(0, 2),
                    ".",
                    cnpjTratado.substr(2, 3),
                    ".",
                    cnpjTratado.substr(5, 3),
                    "/",
                    cnpjTratado.substr(8, 4),
                    "-",
                    cnpjTratado.substr(12, 2)
                ].join("");
            },

            /* Validar o número de telefone fixo */
            validarTelefone: function (telefone) {

                var MENSAGEM_ERRO_TELEFONE_INVALIDO = "Telefone digitado inválido.";
                var REG_EXP_SOMENTE_NUMEROS = new RegExp('^\\d+$');

                var telefoneTratado = telefone;

                try {

                    if (!telefoneTratado)
                        throw new Error();

                    telefoneTratado = telefoneTratado.replace(/ /g, "");
                    telefoneTratado = telefoneTratado.replace(/\./g, "");
                    telefoneTratado = telefoneTratado.replace(/\-/g, "");
                    telefoneTratado = telefoneTratado.replace(/\(/g, "");
                    telefoneTratado = telefoneTratado.replace(/\)/g, "");

                    if (telefoneTratado.length != 10)
                        throw new Error();

                    if (!telefoneTratado.match(REG_EXP_SOMENTE_NUMEROS))
                        throw new Error();

                    return [
                        "(",
                        telefoneTratado.substr(0, 2),
                        ") ",
                        telefoneTratado.substr(2, 4),
                        "-",
                        telefoneTratado.substr(6, 4)
                    ].join("");
                }
                catch (e) {

                    alert(MENSAGEM_ERRO_TELEFONE_INVALIDO);

                    return null;
                }
            },

            /* Validar o número de telefone celular com e sem nono dígito */
            validarTelefoneCelular: function (telefone) {

                var MENSAGEM_ERRO_TELEFONE_INVALIDO = "Telefone celular digitado inválido.";
                var REG_EXP_SOMENTE_NUMEROS = new RegExp('^\\d+$');

                var telefoneTratado = telefone;

                try {

                    if (!telefoneTratado)
                        throw new Error();

                    telefoneTratado = telefoneTratado.replace(/ /g, "");
                    telefoneTratado = telefoneTratado.replace(/\./g, "");
                    telefoneTratado = telefoneTratado.replace(/\-/g, "");
                    telefoneTratado = telefoneTratado.replace(/\(/g, "");
                    telefoneTratado = telefoneTratado.replace(/\)/g, "");

                    if (!telefoneTratado.match(REG_EXP_SOMENTE_NUMEROS))
                        throw new Error();

                    if (telefoneTratado.length === 10) {

                        return [
                            "(",
                            telefoneTratado.substr(0, 2),
                            ") ",
                            telefoneTratado.substr(2, 4),
                            "-",
                            telefoneTratado.substr(6, 4)
                        ].join("");
                    }
                    else if (telefoneTratado.length === 11) {

                        return [
                            "(",
                            telefoneTratado.substr(0, 2),
                            ") ",
                            telefoneTratado.substr(2, 5),
                            "-",
                            telefoneTratado.substr(7, 4)
                        ].join("");
                    }
                    else {

                        throw new Error();
                    }
                }
                catch (e) {

                    alert(MENSAGEM_ERRO_TELEFONE_INVALIDO);

                    return null;
                }
            },

            /* Remove os caracteres especiais do texto informado */
            removerCaracteresEspeciais: function (texto) {

                var input = texto;

                input = input.replace(/[áàâã]/gi, 'a').replace(/[éèêê]/gi, 'e').replace(/[íìî]/gi, 'i').replace(/[óòôõ]/gi, 'o').replace(/[úùû]/gi, 'u').replace(/[ç]/gi, 'c');

                return input;
            },

            /* Retorna o contexto do CRM */
            context: function () {

                var oContext;

                if (typeof window.GetGlobalContext != "undefined") {

                    oContext = window.GetGlobalContext();
                }
                else {

                    if (typeof Xrm != "undefined") {

                        oContext = Xrm.Page.context;
                    }
                    else if (typeof window.parent.Xrm != "undefined") {

                        oContext = window.parent.Xrm.Page.context;
                    }
                    else {

                        throw new Error("Context is not available.");
                    }
                }

                return oContext;
            },

            /* Retorna o endereço de acesso do CRM */
            getClientUrl: function () {

                var serverUrl = typeof L3.Crm.Common.Methods.context().getClientUrl !== "undefined" ? L3.Crm.Common.Methods.context().getClientUrl() : L3.Crm.Common.Methods.context().getServerUrl();

                if (serverUrl.match(/\/$/)) {
                    serverUrl = serverUrl.substring(0, serverUrl.length - 1);
                }

                return serverUrl;
            },

            /* Retorna o endereço do serviço ODATA (REST) do CRM */
            oDataPath: function () {

                return L3.Crm.Common.Methods.getClientUrl() + "/XRMServices/2011/OrganizationData.svc/";
            },

            /* Converte um campo texto do CRM em um link */
            convertFieldTextToLinkReadOnly: function (attribute) {

                var url = Xrm.Page.getAttribute(attribute).getValue();
                var control = Xrm.Page.ui.controls.get(attribute)._control;
                var anchor;

                var previousAnchors = control.get_element().getElementsByTagName("a");

                if (previousAnchors.length > 0)
                    control.get_element().removeChild(previousAnchors[0]);

                if (url) {

                    anchor = "<a href='javascript: void(0);' onclick=\"window.open(\'" + url + "', \'window\');  return false;\" style='color:blue;text-decoration:underline !important';>Abrir Item</a>";
                    control.get_element().innerHTML += anchor;
                }

                control.get_element().firstChild.style.display = 'none';
            },

            /* Desabilita apenas os campos modificados no formulário no CRM */
            disableIfIsDirtyFields: function () {

                var attributes = Xrm.Page.data.entity.attributes.get();

                for (var i = 0; i < attributes.length; i++) {

                    var attribute = attributes[i];

                    if (attribute.getIsDirty())
                        Xrm.Page.getControl(attribute.getName()).setDisabled(true);
                }
            },

            /* Desabilita todos os campos do formulário no CRM */
            disableAllFields: function () {

                var attributes = Xrm.Page.data.entity.attributes.get();

                $.each(attributes, function (i, attribute) {

                    var control = Xrm.Page.getControl(attribute.getName());

                    if (control)
                        control.setDisabled(true);
                });
            },

            /* Desabilita uma lista do formulário no CRM */
            disableFields: function (attributes) {

                $.each(attributes, function (i, name) {

                    var control = Xrm.Page.getControl(name);

                    if (control)
                        control.setDisabled(true);
                });
            },

            /* Habilita uma lista de campos do CRM */
            enableFields: function (attributes) {

                $.each(attributes, function (i, name) {

                    var control = Xrm.Page.getControl(name);

                    if (control)
                        control.setDisabled(false);
                });
            },

            /* Atualiza IFRAME ou WebResource contendo uma página HTML */
            refreshIFrameOrWebResource: function (controlName) {

                var iframe = Xrm.Page.getControl(controlName);

                iframe.setSrc(iframe.getSrc());
            },

            /* Atualiza formulário do CRM */
            reloadForm: function () {

                var isDirty = Xrm.Page.data.entity.getIsDirty();

                if (isDirty) {

                    Xrm.Page.data.entity.save();

                } else {

                    window.location.reload(true);
                }
            },

            /* Limpa o conteudo de uma lista de campos no formulário do CRM */
            cleanAttributes: function (attributes) {

                $.each(attributes, function (i, name) {

                    var userPrivilege = Xrm.Page.getAttribute(name).getUserPrivilege();

                    if (userPrivilege) {
                        if (userPrivilege.canCreate && userPrivilege.canUpdate) {
                            Xrm.Page.getAttribute(name).setValue(null);
                            Xrm.Page.getAttribute(name).setSubmitMode("always");
                        }
                    }
                    else {
                        Xrm.Page.getAttribute(name).setValue(null);
                        Xrm.Page.getAttribute(name).setSubmitMode("always");
                    }
                });
            },

            /* Habilita todos os campos de uma guia no formulário */
            disableAllControlsInTab: function (tabControlNo) {

                var tabControl = Xrm.Page.ui.tabs.get(tabControlNo);

                if (tabControl != null) {

                    Xrm.Page.ui.controls.forEach(

                     function (control) {

                         if (control.getParent().getParent() === tabControl && control.getControlType() != "subgrid") {

                             control.setDisabled(true);
                         }
                     });
                }
            },

            /* Habilita todos os campos de uma guia no formulário */
            enableAllControlsInTab: function (tabControlNo) {

                var tabControl = Xrm.Page.ui.tabs.get(tabControlNo);

                if (tabControl != null) {

                    Xrm.Page.ui.controls.forEach(

                     function (control) {

                         if (control.getParent().getParent() === tabControl && control.getControlType() != "subgrid") {

                             control.setDisabled(false);
                         }
                     });
                }
            },

            /* Verifica se o formulário atual é de criação */
            isCreateForm: function () {

                return Xrm.Page.ui.getFormType() == L3.Crm.Common.Constants.FORM_TYPE_CREATE;
            },

            /* Verifica se o formulário atual é de atualização */
            isUpdateForm: function () {

                return Xrm.Page.ui.getFormType() == L3.Crm.Common.Constants.FORM_TYPE_UPDATE;
            },

            /* Verifica se o formulário atual é de um registro desabilitado */
            isDisabledForm: function () {

                return Xrm.Page.ui.getFormType() == L3.Crm.Common.Constants.FORM_TYPE_DISABLED;
            },

            /* Verifica se o formulário atual é somente leitura */
            isReadOnlyForm: function () {

                return Xrm.Page.ui.getFormType() == L3.Crm.Common.Constants.FORM_TYPE_READ_ONLY;
            },

            /* Verifica se o usuário atual possui o direito de acesso especificado */
            isCurrentUserMemberOfRole: function (roleName) {

                var isMemberOfRole = false;

                var currentUserRoles = Xrm.Page.context.getUserRoles();
                var rolesId = L3.Crm.Common.Methods.getRoleIdByName(roleName);

                for (var i = 0; i < currentUserRoles.length; i++) {

                    if (jQuery.inArray(currentUserRoles[i], rolesId) != -1) {
                        isMemberOfRole = true;
                        break;
                    }
                }

                return isMemberOfRole;
            },

            /* Busca o id do direito de acesso por nome */
            getRoleIdByName: function (roleName) {

                var rolesId = [];

                var fetchXml = [
                '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">',
                '<entity name="role">',
                '<attribute name="roleid" />',
                '<filter type="and">',
                '<condition attribute="name" operator="eq" value="' + roleName + '" />',
                '</filter>',
                '</entity>',
                '</fetch>'].join('');

                var roles = XrmServiceToolkit.Soap.Fetch(fetchXml);

                for (var i = 0; i < roles.length; i++) {

                    rolesId.push(roles[i].attributes["roleid"].value);
                }

                return rolesId;
            },
        },
    }
};