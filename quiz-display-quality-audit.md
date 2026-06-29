# Quiz Display Quality Audit

Scope: A1, A2, and B1 vocabulary/article quiz datasets.

## Cleaned entries

| Original value | Cleaned value | Reason |
|---|---|---|
| `Wohnungen sind zu teuer.` | `Wohnungen` | Imported example sentence; keep standalone plural noun. |
| `Fahrt mit.` | `Fahrt` | Imported verb fragment; keep standalone noun. |
| `Steuern erhöhen.` | `Steuern` | Imported verb phrase; keep standalone plural noun. |
| `Museum.` | `Museum` | Remove trailing punctuation. |
| `Automat funktioniert?` | `Automat` | Imported question fragment; keep standalone noun. |
| `Post.` | `Post` | Remove trailing punctuation; corrected article to die. |
| `neuen Prüfungstermine.` | `Prüfungstermine` | Remove adjective and trailing punctuation; keep standalone plural noun. |
| `nachschauen.` | `Terminkalender` | Imported split sentence fragment; reconstructed intended standalone noun from source context. |
| `Licht an?` | `Licht` | Imported question fragment; keep standalone noun. |
| `letzten Prüfung.` | `Prüfung` | Remove adjective and trailing punctuation; corrected article to die. |
| `Stadt.` | `Stadt` | Remove trailing punctuation; corrected article to die. |
| `Tafel.` | `Tafel` | Remove trailing punctuation. |

These fixes were applied to the B1 article quiz dataset and matching B1 vocabulary/full/problem-review source rows where present.

## Active Article Quiz verification

- `data/a1/unserdorf_a1_article_quiz_items.csv`: 0 disruptive punctuation entries.
  - Reviewed space-containing entries left in place: `Pommes frites`
- `data/a2/unserdorf_a2_article_quiz_items.csv`: 0 disruptive punctuation entries.
  - Reviewed space-containing entries left in place: `Pommes frites`
- `data/b1/unserdorf_b1_article_quiz_items.csv`: 0 disruptive punctuation entries.
  - Reviewed space-containing entries left in place: `Pommes frites`

## Remaining flagged display values for future review

The audit intentionally flags many legitimate vocabulary phrases, reflexive verbs, determiners, and alternate forms. These were not automatically changed. Full machine-readable list: `/private/tmp/unserdorf_quiz_display_audit_after_cleanup.csv`.

- `data/a1/unserdorf_a1_article_quiz_items.csv`: 1 flagged values. Examples: `Pommes frites`
- `data/a1/unserdorf_a1_vocabulary_quiz_items.csv`: 23 flagged values. Examples: `all-/alles`, `an sein`, `auf sein`, `aus sein`, `circa/ca.`, `der/die/das`, `gern(e)`, `ihr/ihm/ihn`, `Pommes frites`, `Rad fahren`, `sich anmelden`, `sich anziehen`
- `data/a2/unserdorf_a2_article_quiz_items.csv`: 1 flagged values. Examples: `Pommes frites`
- `data/a2/unserdorf_a2_vocabulary_quiz_items.csv`: 15 flagged values. Examples: `sich freuen`, `am liebsten`, `am besten`, `herein/rein`, `ein paar`, `Pommes frites`, `recht haben`, `an sein`, `aus sein`, `auf sein`, `weg sein`, `zu sein`
- `data/b1/unserdorf_b1_article_quiz_items.csv`: 1 flagged values. Examples: `Pommes frites`
- `data/b1/unserdorf_b1_vocabulary_quiz_items.csv`: 138 flagged values. Examples: `Abgase (Pl.)`, `Lasst uns über diesen Punkt abstimmen.`, `als ob`, `sich amüsieren`, `Achtung!`, `sich anstrengen`, `bekommen Sie eine Anzeige.`, `Schmecken dir die Aprikosen?`, `Füllen Sie bitte dieses Formular aus!`, `sich bedanken`, `-en (A`, `Zahlen Sie bar?`
