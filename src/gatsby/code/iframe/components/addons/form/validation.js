import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const checkDefault = require('components/snippets/classes/form-check-default').default
const radioDefault = require('components/snippets/classes/form-radio-default').default
const switchDefault = require('components/snippets/classes/form-switch-default').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>
  <div class="row row-space-x-4 row-space-y-3">

    <div class="w-full">
      <label class="label mb-3 ${labelDefault()}">
        Custom constrain
      </label>
      <input type="text" class="input ${inputDefault()} custom-constrain" placeholder="Custom constrain" required>
    </div>

    <div class="w-full">
      <label class="label mb-3 ${labelDefault()}">
        Email
      </label>
      <input type="email" class="input ${inputDefault()} " placeholder="Email" required>
    </div>

    <div class="w-full">
      <label class="label mb-3 ${labelDefault()}">
        Number
      </label>
      <input type="number" class="input ${inputDefault()} " placeholder="Number" required min="1" max="10">
    </div>

    <div class="w-full">
      <label class="label mb-3 ${labelDefault()}">
        Letters
      </label>
      <input type="text" class="input ${inputDefault()} " placeholder="Letter" required pattern="[A-Za-z]+">
    </div>

    <div class="w-full">
      <label class="label mb-3 ${labelDefault()}">
        File
      </label>
      <input type="file" class="input ${inputDefault()}" required/>
    </div>

    <div class="w-full">
      <label class="label mb-3 ${labelDefault()}">
        Textarea
      </label>
      <textarea class="input ${inputDefault()}" placeholder="Textarea" required></textarea>
    </div>

    <div class="w-full">
      <label class="label mb-3 ${labelDefault()}">
        Select
      </label>
      <select class="input ${inputDefault()}" required>
        <option selected value="">Select an option</option>
        <option>Test</option>
        <option>Test</option>
        <option>Test</option>
      </select>
    </div>

    <div class="w-full">
      <label class="label mb-3 ${labelDefault()}" required>
        Select multiple
      </label>
      <select class="input ${inputDefault()}" multiple>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">
      <label class="label ${labelDefault()}">
        Checkbox
      </label>
    </div>

    <div class="w-full">
      <label class="label-check">
        <input type="checkbox" class="checkbox ${checkDefault()}" required disabled>
        <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
      </label>
    </div>

    <div class="w-full">
      <label class="label-check">
        <input type="checkbox" class="checkbox ${checkDefault()}" required>
        <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
      </label>
    </div>

    <div class="w-full">
      <label class="label ${labelDefault()}">
        Radio
      </label>
    </div>

    <div class="w-full">
      <label class="label-check">
        <input type="radio" class="radio ${radioDefault()}" name="radio-validation" required>
        <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
      </label>
    </div>

    <div class="w-full">
      <label class="label-check">
        <input type="radio" class="radio ${radioDefault()}" name="radio-validation">
        <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
      </label>
    </div>

    <div class="w-full">
      <label class="label ${labelDefault()}">
        Switch
      </label>
    </div>

    <div class="w-full">
      <label class="label-check">
        <input type="checkbox" class="switch ${radioDefault()}" required>
        <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
      </label>
    </div>

    <div class="w-full">
      <label class="label-check">
        <input type="radio" class="switch ${switchDefault()}" name="switch-validation" required>
        <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
      </label>
    </div>

    <div class="w-full">
      <label class="label-check">
        <input type="radio" class="switch ${switchDefault()}" name="switch-validation">
        <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
      </label>
    </div>

    <div class="w-full">
      <button type="submit" class="btn btn-md ${btnPrimary()}">
        submit
      </button>
    </div>

  </div>
</form>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
