import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum dengan input angka positif', () => {
  assert.strictEqual(sum(2, 3), 5, 'Penjumlahan 2 + 3 seharusnya menghasilkan 5');
  assert.strictEqual(sum(10, 20), 30, 'Penjumlahan 10 + 20 seharusnya menghasilkan 30');
  assert.strictEqual(sum(0, 0), 0, 'Penjumlahan 0 + 0 seharusnya menghasilkan 0');
});

test('sum dengan input bukan angka', () => {
  assert.strictEqual(sum('2', 3), 0, 'Input bukan angka seharusnya menghasilkan 0');
  assert.strictEqual(sum(2, '3'), 0, 'Input bukan angka seharusnya menghasilkan 0');
  assert.strictEqual(sum('a', 'b'), 0, 'Input bukan angka seharusnya menghasilkan 0');
  assert.strictEqual(sum(null, undefined), 0, 'Input null dan undefined seharusnya menghasilkan 0');
  assert.strictEqual(sum({}, []), 0, 'Input object dan array seharusnya menghasilkan 0');
});

test('sum dengan input angka negatif', () => {
  assert.strictEqual(sum(-1, 5), 0, 'Input angka negatif seharusnya menghasilkan 0');
  assert.strictEqual(sum(5, -1), 0, 'Input angka negatif seharusnya menghasilkan 0');
  assert.strictEqual(sum(-1, -1), 0, 'Input dua angka negatif seharusnya menghasilkan 0');
});
