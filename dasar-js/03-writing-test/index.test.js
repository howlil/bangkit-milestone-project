import {sum} from './index.js';
import {test} from 'node:test';
import assert from 'node:assert';

test('Pengujian fungsi sum dengan angka positif', () => {
  assert.strictEqual(sum(1, 2), 3,'1 + 2 harusnya 3');
})

test('Pengujian fungsi sum dengan angka negatif', () => {
  assert.strictEqual(sum(-1, -2), -3,'-1 + -2 harusnya -3');
})

test('Pengujian fungsi sum dengan angka positif dan negatif', () => {
  assert.strictEqual(sum(1, -2), -1,'1 + -2 harusnya -1');
})

test('Pengujian fungsi sum dengan nol', () => {
  assert.strictEqual(sum(0, 5), 5, 'Penjumlahan 0 dan 5 harusnya 5');
  assert.strictEqual(sum(0, 0), 0, 'Penjumlahan 0 dan 0 harusnya 0');
});
