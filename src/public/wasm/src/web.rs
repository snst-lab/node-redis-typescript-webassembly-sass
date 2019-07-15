
extern crate web_sys;
extern crate wasm_bindgen;
use wasm_bindgen::{prelude::*,JsCast};

pub struct Document{}

impl Document {
    pub fn document() -> web_sys::Document {
        web_sys::window().unwrap().document().unwrap()
    }
    pub fn create_element(tagname:&str) -> web_sys::HtmlElement {
        return Document::document().create_element(tagname).unwrap().dyn_into::<web_sys::HtmlElement>().unwrap();
    }
    pub fn query_selector(selector:&str) -> web_sys::HtmlElement {
        return Document::document().query_selector(selector).unwrap().unwrap().dyn_into::<web_sys::HtmlElement>().unwrap();
    }
}

pub struct Window{}

impl Window {
    pub fn window() -> web_sys::Window {
        web_sys::window().expect("no global `window` exists")
    }
    pub fn request_animation_frame(f: &Closure<dyn FnMut()>) {
        Window::window().request_animation_frame(f.as_ref().unchecked_ref()).expect("should register `requestAnimationFrame` OK");
    }
}



