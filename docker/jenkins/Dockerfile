# ===============================
# Jenkins LTS - Orquestador CI
# ===============================
FROM jenkins/jenkins:lts

# Ejecutar como root solo para instalar dependencias
USER root

# -------------------------------
# Dependencias mínimas necesarias
# -------------------------------
RUN apt-get update && apt-get install -y \
    git \
    curl \
    ca-certificates \
    gnupg \
    lsb-release \
    unzip \
    openjdk-11-jdk \
    && rm -rf /var/lib/apt/lists/*

# -------------------------------
# Instalar Docker CLI
# -------------------------------
RUN curl -fsSL https://get.docker.com | sh

# Permitir que Jenkins use Docker
RUN usermod -aG docker jenkins

# -------------------------------
# Instalar Allure CLI
# -------------------------------
ENV ALLURE_VERSION=2.35.0
RUN wget https://github.com/allure-framework/allure2/releases/download/${ALLURE_VERSION}/allure-${ALLURE_VERSION}.zip -O /tmp/allure.zip \
    && unzip /tmp/allure.zip -d /opt/ \
    && ln -s /opt/allure-${ALLURE_VERSION}/bin/allure /usr/bin/allure \
    && rm /tmp/allure.zip

# -------------------------------
# Ajustes finales
# -------------------------------
# Volver a usuario Jenkins (NO root)
USER jenkins

# Puertos Jenkins
EXPOSE 8080 50000

# EntryPoint estándar
ENTRYPOINT ["/usr/bin/tini", "--", "/usr/local/bin/jenkins.sh"]
