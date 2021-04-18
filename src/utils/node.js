const path = require('path');
const fs = require('fs');

const VARIABLES_FILE_PATH = path.join(
  process.cwd(),
  'src/assets/variables.css'
);
const OUTPUT_FILE = path.join(process.cwd(), 'src/assets/test.css');

const MAP = {
  m: 'margin',
  p: 'padding',
};
const TYPES = {
  b: ['bottom'],
  t: ['top'],
  x: ['left', 'right'],
  y: ['top', 'bottom'],
};

const LEVELS = [
  'mt',
  'mb',
  'mr',
  'ml',
  'my',
  'mx',
  'ma',
  'pt',
  'pb',
  'pr',
  'pl',
  'py',
  'px',
  'pa',
];

function hepHo() {
  const result = fs.readFileSync(VARIABLES_FILE_PATH, 'utf-8');
  const spaces = result.match(/--space-\w+:\s\d+(\.)?(\d)?(\w+)/g);
  let str = '';
  spaces.forEach(space => {
    const level = space.split(':')[0].replace('--', '').split('-')[1];
    const variable = `var(${space.split(':')[0]});`;

    LEVELS.forEach(attr => {
      const [map, type] = attr.split('');

      if (!TYPES[type]) {
        str += `.${attr}-${level} {\n  ${MAP[map]}: ${variable}\n}\n`;
      } else {
        str += `.${attr}-${level} {\n  ${TYPES[type].reduce(
          (acc, side, i) =>
            `${acc}${i > 0 ? '  ' : ''}${MAP[map]}${
              side ? `-${side}` : ''
            }: ${variable}\n`,
          ''
        )}}\n`;
      }
    });
  });

  fs.writeFileSync(OUTPUT_FILE, str, 'utf-8');
}

hepHo();
