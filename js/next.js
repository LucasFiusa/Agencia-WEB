// Código para a página de contato (index.html)
if (window.location.pathname.includes("index.html")) {
    document.getElementById("formContato").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.getElementById("btnFName").value;
        const sobrenome = document.getElementById("btnLName").value;

        // Redireciona para a página de agradecimento na pasta 'html'
        window.location.href = `/seu-repositorio/html/agradecimento.html?nome=${encodeURIComponent(nome)}&sobrenome=${encodeURIComponent(sobrenome)}`;
    });
}

// Código para a página de agradecimento (html/agradecimento.html)
if (window.location.pathname.includes("agradecimento.html")) {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome") || "Visitante";
    const sobrenome = params.get("sobrenome") || "";

    document.getElementById("h1").textContent =
        `Obrigado, ${nome} ${sobrenome}! Em breve, entraremos em contato com você por email. Fique de olho e, qualquer dúvida, estamos à disposição para ajudar.`;
}
