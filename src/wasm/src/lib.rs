extern crate wasm_bindgen;

pub mod web;
use crate::web::{Document,Window};

use std::rc::Rc;
use std::cell::RefCell;
use web_sys::{HtmlElement, DocumentFragment};
use wasm_bindgen::{prelude::*, JsCast};

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: &str);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    pub fn log_u32(a: u32);
}

#[macro_use]
extern crate lazy_static;
use std::sync::RwLock;

lazy_static! {
    static ref CLASSES: RwLock<Vec<String>> = RwLock::new(Vec::new());
}

#[wasm_bindgen]
pub struct Main{
}

#[wasm_bindgen]
impl Main{

    #[wasm_bindgen(constructor)]
    pub fn new() -> Main {
        Main { 
            canvas: Document::query_selector(".canvas"),
        }
    }
}

