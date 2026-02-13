# 1️⃣ Base
FROM jenkins/jenkins:lts

USER root

# 2️⃣ Instalar dependencias básicas + Docker CLI
RUN apt-get update && apt-get install -y \
    sudo \
    curl \
    unzip \
    gnupg \
    lsb-release \
    ca-certificates \
    git \
    docker.io \
    && rm -rf /var/lib/apt/lists/*

# 3️⃣ Instalar Node.js LTS
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# 4️⃣ Instalar Playwright y navegadores
RUN npm install -g playwright \
    && npx playwright install --with-deps

# 5️⃣ Instalar Allure CLI
RUN curl -L https://github.com/allure-framework/allure2/releases/download/2.36.0/allure-2.36.0.zip -o /tmp/allure.zip \
    && unzip /tmp/allure.zip -d /opt/ \
    && ln -s /opt/allure-2.36.0/bin/allure /usr/bin/allure \
    && rm /tmp/allure.zip

# 6️⃣ Preinstalar pw-allure-testqa (Playwright + Node + Allure)
# Aquí simplemente instalamos dependencias globales para simular la imagen
RUN npm install -g npm@latest \
    && npm install -g allure-playwright

# 7️⃣ Dar permisos de Docker al usuario Jenkins
RUN usermod -aG docker jenkins

USER jenkins

# Contenedor listo para Jenkins con Playwright y Allure
