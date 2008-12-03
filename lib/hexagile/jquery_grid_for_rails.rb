module Hexagile
  module JqueryGridForRails
    def jquery_grid(name, opts={})
      @@grid_name = name.to_s
      grid_data = YAML::load_file("#{RAILS_ROOT}/config/jquery_grid/#{name}.yml")

      before = grid_data[:before]
      params = grid_data[:params]
      
      def param_body(value)
        value.scan(/^\((.+?)\)(.+)/).flatten
      end
      
      jquery_grid_code = <<-CODE
          <script type="text/javascript">
            <%= before %>_n_
        		$(document).ready(function(){ 
        		  $("#<%= name %>").jqGrid({        		    
        		  <% params.each do |key,value| %>
        		    <% if opts.keys.include?(key) %>
        		      _ss_<%= key %>: <%= opts[key].to_json %>,
        		    <% elsif (value.is_a? String) && (value[0..0] == "$") %>
        		      _ss_<%= key %>: <%= value %>,
        		    <% elsif (key.to_s[0..8] == 'function_') %>
        		      <% js_params, body = param_body(value) %>
        		      _ss_<%= key.to_s[9..-1] %>: function(<%= js_params %>) {
        		        _ss__ss_<%= body %> 
        		      _ss_},
        		    <% else %>
        		      _ss_<%= key %>: <%= value.to_json %>,
        		    <% end %>
              <% end %>                            
      		    <% opts.each do |key,value| %>
      		      <% unless params.keys.include?(key) %>
      		        _ss_<%= key %>: <%= value.to_json %>,
      		      <% end %>
      		    <% end %> });
        	  });
          </script>
      CODE
      ::ERB.new(jquery_grid_code, nil, '>').result(binding).gsub("_n_", "\n").
        gsub(/[ \t]{2,}/,' ').
        gsub(/,\s+\}\);/, "\n  });").
        gsub(/\n\s*\n/m, "\n").
        gsub("_ss_", "  ").
        gsub("<grid_name>", @@grid_name)
    end
    
    def jquery_grid_table
      "<table id=\"#{@@grid_name}\" class=\"scroll\"></table>"
    end
    
    def jquery_grid_pager
      "<div id=\"#{@@grid_name}_pager\" class=\"scroll\" style=\"text-align:center;\"></div>"
    end
    
    def include_jquery_grid_javascript
      <<-JS
      <script src="/javascripts/jquery.jqGrid.js" type="text/javascript"></script>
      <script src="/javascripts/js/jqModal.js" type="text/javascript"></script>
      <script src="/javascripts/js/jqDnR.js" type="text/javascript"></script> 
      JS
    end
    
    def include_jquery_grid_css
      <<-CSS
      <link href="/stylesheets/jqGrid-themes/basic/grid.css" media="screen" rel="stylesheet" type="text/css" />
      <link href="/stylesheets/jqGrid-themes/jqModal.css" media="screen" rel="stylesheet" type="text/css" />
      CSS
    end
  end
end
