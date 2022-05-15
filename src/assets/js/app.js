
// obter o plugin cookieconsent
var cc = initCookieConsent();

// executar plugin com objeto de configuração
cc.run({
    autorun : true, 
    delay : 0,
    current_lang : 'pt-br',
    auto_language : true,
    autoclear_cookies : true,
    cookie_expiration : 365,
    theme_css: 'assets/dist/cookieconsent.css',
    force_consent: false,
 
    page_scripts: true,                         // default: false (por padrão, não gerencia tags de script existentes)

    /* Opções Basic gui options */
    gui_options : {
        consent_modal : {
            layout : 'box',                       // box(default),cloud,bar
            position : 'bottom right',             // bottom(default),top + left,right,center:=> examples: 'bottom' or 'top right'
            transition : 'slide'                    // zoom (padrão), slide
        },
        settings_modal : {
            layout : 'bar',                 // box(default),bar
            position: 'left',               // right(default),left (available only if bar layout selected)
            transition : 'slide'            // zoom(default),slide
        }
    },

    /* Fim de novas opções adicionadas */

    onAccept: function(cookie){
        console.log("onAccept fired ...");
        disableBtn('btn2');
        disableBtn('btn3');
        
        // Excluir linha abaixo
        document.getElementById("cookie_val").innerHTML = JSON.stringify(cookie, null, 2);
    },

    onChange: function(cookie, changed_preferences){
        console.log("onChange fired ...");
        
        // Se o status da categoria de análise foi alterado ...
        if(changed_preferences.indexOf('analytics') > -1){

            // Se a categoria de análise estiver desativada ...
            if(!cc.allowedCategory('analytics')){

                // Desabilitar gtag ...
                console.log("disabling gtag")
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'analytics_storage': 'denied'
                });
            }
        }

        // Excluir linha abaixo
        document.getElementById("cookie_val").innerHTML = JSON.stringify(cookie, null, 2);
    },

    languages : {
        'pt-br' : {	
            consent_modal : {
                title :  "🍪 Notificação de Cookies",
                description :  'Usamos cookies para entender como você usa nosso site e para melhorar sua experiência. Ao continuar a usar nosso site, você aceita nosso uso de cookies, <a data-bs-toggle="modal" data-bs-target="#ModalPrivacidade" class="cc-link">Política de Cookies,</a>  <a data-bs-toggle="modal" data-bs-target="#ModalTermo" class="cc-link">Termo de Uso.</a>',
                primary_btn: {
                    text: 'Aceitar',
                    role: 'accept_all'      //'aceitar_selecionado 'ou' aceitar_todos'
                },
                secondary_btn: {
                    text : 'Personalizar',
                    role : 'settings'       //'configurações 'ou' aceitar_necessário'
                },
                revision_message: "<br><br> Caro usuário, os termos e condições foram alterados desde a última vez que você visitou!"
            },
            settings_modal : {
                title : '<div>Configurações dos Cookies</div><div aria-hidden="true" style="font-size: .8em; font-weight: 200; color: #687278; margin-top: 5px;">Distribuído por <a tabindex="-1" aria-hidden="true" href="index.html" style="text-decoration: underline;">LCS Tecnologia</a></div>',
                save_settings_btn : "Salvar Seleção Atual",
                accept_all_btn : "Aceitar Tudo",
                reject_all_btn: "Rejeitar tudo",
                close_btn_label: "Close",
                cookie_table_headers : [
                    {col1: "Nome" }, 
                    {col2: "Dominio" }, 
                    {col3: "Vencimento" }
                ],
                blocks : [
                    {
                        title : "Uso de cookies",
                        description: 'Os cookies necessários ajudam a tornar um site utilizável, permitindo funções básicas como navegação de página e acesso a áreas seguras do site <a data-bs-toggle="modal" data-bs-target="#ModalTermo" class="cc-link">Termo de Uso</a>.'
                    },{
                        title : "Cookies Extremamente Necessários",
                        description: 'Este cookie é definido por sites que usam certas versões da solução de conformidade da lei de cookies. Ele é definido depois que os visitantes visualizam um aviso de informações de cookie e, em alguns casos, apenas quando fecham ativamente o aviso. Ele permite que o site não mostre a mensagem mais de uma vez para um usuário. O cookie dura um ano e não contém informações pessoais.',
                        toggle : {
                            value : 'necessary',
                            enabled : true,
                            readonly: true  //categorias de cookies com somente leitura = true são tratadas como "cookies necessários"
                        }
                    },{
                        title : "Cookies de Desempenho",
                        description: 'Estes cookies permitem-nos contar visitas e fontes de tráfego, para que possamos medir e melhorar o desempenho do nosso website. Eles ajudam-nos a saber quais são as páginas mais e menos populares e a ver como os visitantes se movimentam pelo website. Todas as informações recolhidas por estes cookies são agregadas e, por conseguinte, anónimas. Se não permitir estes cookies, não saberemos quando visitou o nosso site.',
                        toggle : {
                            value : 'analytics',
                            enabled : false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '^_gat',
                                col2: 'lcstec.com.br',
                                col3: 'Este nome de cookie está associado ao Google Universal Analytics, de acordo com a documentação, ele é usado para controlar a taxa de solicitação - limitando a coleta de dados em sites de alto tráfego. Ele expira após 10 minutos.',
                                is_regex: true
                            },
                            {
                                col1: '_ga',
                                col2: 'lcstec.com.br',
                                col3: 'Este nome de cookie está associado ao Google Universal Analytics - que é uma atualização significativa para o serviço de análise mais comumente usado do Google. Este cookie é usado para distinguir usuários únicos, atribuindo um número gerado aleatoriamente como um identificador de cliente. Ele é incluído em cada solicitação de página em um site e usado para calcular dados de visitantes, sessões e campanhas para os relatórios analíticos de sites. Por padrão, ele é definido para expirar após 2 anos, embora seja personalizável pelos proprietários de sites.',
                            },
                            {
                                col1: '_gid',
                                col2: 'lcstec.com.br',
                                col3: 'Este nome de cookie está associado ao Google Universal Analytics. Este parece ser um novo cookie e, a partir de 2017, nenhuma informação do Google está disponível. Parece armazenar e atualizar um valor único para cada página visitada.',                                
                            }
                        ]
                    },{
                        title : "Cookies de segmentação e publicidade",
                        description: 'Se esta categoria for desmarcada, <b>a página será recarregada quando as preferências forem salvas</b>... <br><br>Estes cookies permitem-nos contar visitas e fontes de tráfego, para que possamos medir e melhorar o desempenho do nosso website. Eles ajudam-nos a saber quais são as páginas mais e menos populares e a ver como os visitantes se movimentam pelo website. Todas as informações recolhidas por estes cookies são agregadas e, por conseguinte, anónimas. Se não permitir estes cookies, não saberemos quando visitou o nosso site.',
                        toggle : {
                            value : 'targeting',
                            enabled : false,
                            readonly: false,
                            reload: 'on_disable'            
                        },
                        cookie_table : [
                            {
                                col1: '^_cl',               // New option in v2.4: regex (microsoft clarity cookies)
                                col2: 'lcstec.com.br',
                                col3: 'Esses cookies são definidos por microsoft clarity',
                                // path: '/',               // New option in v2.4
                                is_regex: true              // New option in v2.4
                            },
                            {
                                col1: 'fr',               // New option in v2.4: regex (microsoft clarity cookies)
                                col2: 'facebook.com',
                                col3: 'Contém uma combinação de navegador e ID exclusivo do usuário, usada para publicidade direcionada.',
                                // path: '/',               // New option in v2.4
                                is_regex: true              
                            }
                        ]
                    },{
                        title : "Mais Informações",
                        description: 'Para qualquer dúvida em relação à nossa política de cookies e suas escolhas, por favor entre em <a class="cc-link" href="contato.html">Contato</a>.',
                    }
                ]
            }
        }
    }
});


// EXCLUA TODO O CONTEÚDO ABAIXO DESTE COMENTÁRIO!!!
if(cc.validCookie('cc_cookie')){
    //se o cookie for definido => desabilitar botões
    disableBtn('btn2');
    disableBtn('btn3');
}

function disableBtn(id){
    document.getElementById(id).disabled = true;
    document.getElementById(id).className = "styled_btn disabled";
}

var darkmode = false;

function toggleDarkmode(){
    if(!darkmode){
        document.getElementById('theme').innerText = 'dark theme';
        document.body.className='d_mode c_darkmode';
        darkmode = true;
    }else{
        document.getElementById('theme').innerText = 'light theme';
        document.body.className='d_mode';
        darkmode = false;
    }
}

/*
* As seguintes linhas de código são para fins de demonstração (mostrar funções da API)
*/
if(document.addEventListener){

    document.getElementById("btn2").addEventListener('click', function(){
        cc.show(0);
    });

    document.getElementById("btn3").addEventListener('click', function(){
        cc.hide();
    });

    document.getElementById("btn5").addEventListener('click', function(){
        cc.showSettings(0);  
    });

    document.getElementById("btn6").addEventListener('click', function(){
        toggleDarkmode();
    });
}else{
    document.getElementById("btn2").attachEvent('onclick', function(){
        cc.show(0);
    });

    document.getElementById("btn3").attachEvent('onclick', function(){
        cc.hide();
    });

    document.getElementById("btn5").attachEvent('onclick', function(){
        cc.showSettings(0);  
    });

    document.getElementById("btn6").attachEvent('onclick', function(){
        toggleDarkmode();
    });
}