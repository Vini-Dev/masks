export default {
  unmask: (string) => string.replace(/\D/g, ''),
  cpf: (string) =>
    string
      .replace(/\D/g, '') // Replace any non-number character for nothing
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'),
  rg: (string) =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{1})\d+?$/, '$1'),
  cnpj: (string) =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'),
  cpfOrCnpj(string) {
    const value = this.unmask(string);
    if (value.length > 11) {
      return this.cnpj(value);
    }
    return this.cpf(value);
  },
  zip_code: (string) =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1'),
  phone: (string) =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d)/, '$1'),
  cellphone: (string) =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1'),
  phoneOrCellphone(string) {
    const value = this.unmask(string);
    if (value.length > 10) {
      return this.cellphone(value);
    }

    return this.phone(value);
  },
  currency: (value) => {
    const string = value.toString();

    if (string.replace(/\D/g, '') !== '')
      return (parseInt(string.replace(/\D/g, ''), 10) / 100).toLocaleString(
        'pt-BR',
        {
          minimumFractionDigits: 2,
          // style: 'currency', To use R$ remove the comments
          // currency: 'BRL',
        }
      );

    return '0,00';
  },
};
