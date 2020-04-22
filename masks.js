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
  zipcode: (string) =>
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
  cell: (string) =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1'),
  currency: (string) =>
    string.replace(/\D/g, '') !== ''
      ? (parseInt(string.replace(/\D/g, ''), 10) / 100).toLocaleString(
          'pt-BR',
          {
            minimumFractionDigits: 2,
            // style: 'currency', To use R$ remove the comments
            // currency: 'BRL',
          }
        )
      : '0,00',
};
