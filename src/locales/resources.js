const commonProps = {
  status: "Situação",
  createdAt: "Criação",
  updatedAt: "Atualização",
};

export default {
  users: {
    actions: {
      resetPassword: "Redefinir senha",
    },
    properties: {
      id: "ID",
      initials: "Iniciais",
      name: "Nome",
      email: "Email",
      password: "Senha",
      passwordHash: "Senha criptografada",
      role: "Perfil",
      ...commonProps,
    },
  },
};
