FROM ubuntu:24.04

# ----------------
# Install packages
# ----------------
# Disable time zone prompts when installing tzdata
ENV DEBIAN_FRONTEND=noninteractive
# Install packages
RUN apt update && apt upgrade -y \
    && apt install -y \
        bash-completion \
        curl \
        git \
        less \
        locales \
        tzdata \
        unzip \
        vim \
    && rm -rf /var/lib/apt/lists/*

# ----------------
# Locale and language settings
# ----------------
RUN locale-gen en_US.UTF-8
ENV LANG=en_US.UTF-8 \
    LANGUAGE=en_US:en \
    LC_ALL=en_US.UTF-8

# ----------------
# Switch user from root to ubuntu
# ----------------
USER ubuntu
WORKDIR /home/ubuntu/nano-code

# ----------------
# Install bun
# ----------------
# Reference: https://bun.com/docs/installation
RUN curl -fsSL https://bun.com/install | bash

CMD ["bash"]
