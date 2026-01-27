import{a as o}from"./chunk-H6DDGBYX.js";import"./chunk-LCWNOMSF.js";import"./chunk-FJJS26WE.js";import{Ba as m,Ra as r,Sa as i,Ta as s,cb as c,db as p,eb as d,ib as f}from"./chunk-76UNUFEL.js";import"./chunk-6UGSP7QS.js";import"./chunk-BOC2UZMU.js";import"./chunk-6WY5G7U6.js";import"./chunk-FD6FUJSP.js";import"./chunk-KJITQPWE.js";import"./chunk-TDR26EUI.js";import"./chunk-2434BUZK.js";import"./chunk-U4OAZQJ7.js";import"./chunk-QP3E3Z6Y.js";import"./chunk-KMQRAFUQ.js";import"./chunk-Z6N7QZJE.js";import"./chunk-OOCD4CDJ.js";import"./chunk-BIHNL7XX.js";import"./chunk-SUN732H5.js";import"./chunk-6PMQQMX7.js";var g=["mermaidDiv"],u=class a{mermaidDiv;ngAfterViewInit(){o.initialize({startOnLoad:!1,theme:"base",themeVariables:{fontSize:"16px",primaryColor:"#ff6b6b",primaryTextColor:"#fff",primaryBorderColor:"#ff4757",lineColor:"#2f3542",sectionBkgColor:"#3742fa",altSectionBkgColor:"#ffa502",gridColor:"#ced6e0",tertiaryColor:"#f1f2f6"}});let e=this.mermaidDiv.nativeElement;e.style.width="100%",e.style.minHeight="500px",e.style.display="flex",e.style.justifyContent="center",o.render("mermaid-svg",`
      graph LR
        %% =========================
        %% Bootstrap Flow
        %% =========================
        A[index.html] --> B[main.ts]
        B --> C[bootstrapApplication]
        C --> D[AppComponent]

        %% =========================
        %% Application Layer
        %% =========================
        subgraph Application Layer
          D --> E[Feature Components]
          E --> F[Templates]
          E --> G[Application Services]
          E --> H[Router Usage]
          F <-->|Data Binding| E
        end

        %% =========================
        %% Platform / Infrastructure
        %% =========================
        subgraph Platform / Infrastructure Layer
          I[HttpClient]
          J[HTTP Interceptors]
          K[Angular Router]
        end

        %% =========================
        %% Angular Core
        %% =========================
        subgraph Angular Core
          L[Dependency Injection]
          M[Change Detection]
          N[Compiler AOT / JIT]
          O[Zone.js]
          P[Renderer]
        end

        %% =========================
        %% Browser Runtime
        %% =========================
        subgraph Browser Runtime
          Q[DOM]
          R[Events]
          S[Network APIs]
        end

        %% =========================
        %% Relationships
        %% =========================
        G --> I
        I --> J
        J --> S

        H --> K

        E --> L
        G --> L
        I --> L
        K --> L

        P --> Q
        O --> R


    `).then(n=>{e.innerHTML=n.svg})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=m({type:a,selectors:[["app-angular-architecture"]],viewQuery:function(t,n){if(t&1&&c(g,7),t&2){let l;p(l=d())&&(n.mermaidDiv=l.first)}},decls:5,vars:0,consts:[["mermaidDiv",""],[1,"container"]],template:function(t,n){t&1&&(r(0,"h1"),f(1,"Angular Architecture Flow"),i(),r(2,"section",1),s(3,"div",null,0),i())},styles:["h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px;padding:30px;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border-radius:12px;box-shadow:0 4px 20px #0000001a}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;min-height:70vh}#mermaidDiv[_ngcontent-%COMP%]{width:100%;max-width:1000px;overflow:auto}"]})};export{u as AngularArchitectureComponent};
