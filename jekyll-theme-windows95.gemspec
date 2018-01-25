# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-windows95"
  spec.version       = "0.5.0"
  spec.authors       = ["Ariel Santos"]
  spec.email         = ["as-ariel@outlook.com"]

  spec.summary       = "A Jekyll theme inspired on the Windows95 UI."
  spec.homepage      = "https://asantos07.github.io/jekyll-theme-windows95/"
  spec.license       = "MIT"
  spec.metadata      = {
    "bug_tracker_uri"   => "https://github.com/asantos07/jekyll-theme-windows95/issues",
    "documentation_uri" => "https://github.com/asantos07/jekyll-theme-windows95/blob/master/README.md",
    "source_code_uri"   => "https://github.com/asantos07/jekyll-theme-windows95",
  }

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i)
  end
  
  spec.required_ruby_version = ">= 2.1.0"

  spec.add_runtime_dependency "jekyll", "~> 3.7"
  spec.add_runtime_dependency "rouge", "~> 3.1"  

  spec.add_development_dependency "bundler", "~> 1.12"
  
end
