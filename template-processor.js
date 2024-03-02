"use strict";

function TemplateProcessor(template) {
  this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionary) {
  let template = this.template;
  if (template.includes("{{month}}")) {
    template = template.replace("{{month}}", dictionary.month);
  }

  if (template.includes("{{day}}")) {
    template = template.replace("{{day}}", dictionary.day);
  }

  if (template.includes("{{year}}")) {
    template = template.replace("{{year}}", dictionary.year);
  }
  console.log(template);
  return template;
};
