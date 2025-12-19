-- Function to prevent updates/deletes on LedgerEntry
CREATE OR REPLACE FUNCTION prevent_ledger_modification()
RETURNS trigger AS $$
BEGIN
  RAISE EXCEPTION 'Ledger entries are immutable';
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger for LedgerEntry
CREATE TRIGGER ledger_no_update
BEFORE UPDATE OR DELETE ON "LedgerEntry"
FOR EACH ROW EXECUTE FUNCTION prevent_ledger_modification();

-- Optional: Trigger for Transaction table
CREATE TRIGGER transaction_no_update
BEFORE UPDATE OR DELETE ON "Transaction"
FOR EACH ROW EXECUTE FUNCTION prevent_ledger_modification();
