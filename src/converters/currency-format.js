import numeral from 'numeral';

// Stolen from http://eisenbergeffect.bluespire.com/binding-with-value-converters-in-aurelia/
export class CurrencyFormatValueConverter {
  toView(value) {
    return numeral(value).format('$-0,0');
  }
}
