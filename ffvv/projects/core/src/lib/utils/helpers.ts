export const formatTextData = (data: string) => {
    let text = '';
    const array = data.toLowerCase().split(' ');
    array.forEach(element => {
      element = element.charAt(0).toUpperCase() + element.slice(1);
      text = text + element + ' ';
    });
    return text;
};

export const removeCharacter = (text: string, character: string) => text.replace(character, '');

export const createPossible = (constancy: string) => {
  const first = parseInt(constancy.charAt(0), 10);
  const next = (first + 1).toString();
  return `${next}d${next}`;
};

export const capitalizeWords = (str: string) => {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};
