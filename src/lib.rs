mod models;
use models::Assignment;
use models::Report;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn create_report(assignments: &str, commission_rate: &str) -> String {
  let commission_rate: f32 = serde_json::from_str(commission_rate).unwrap();
  let assignments: Vec<Assignment> = serde_json::from_str(&assignments).unwrap();
  let report = Report::create(&assignments, commission_rate);

  return serde_json::to_string(&report).unwrap();
}
