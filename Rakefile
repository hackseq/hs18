#!/usr/bin/env ruby

require 'jekyll'
require 'html-proofer'

conf = Jekyll.configuration({
  'source'      => './',
  'destination' => './_site/'
})
Jekyll::Site.new(conf).process

HTMLProofer.check_directory("./_site").run